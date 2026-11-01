import { attachHumanCheck } from "./human-check-controller";
import {
  mockResourceSubmission,
  resourceAccessSession,
} from "./mock-submissions.mjs";

const access = resourceAccessSession(() => window.sessionStorage);
const dialog = document.querySelector<HTMLDialogElement>("#resource-dialog")!;
const form = document.querySelector<HTMLFormElement>("#resource-form")!;
const human = attachHumanCheck(form);
const error = document.querySelector<HTMLElement>("#resource-error")!;
const status = document.querySelector<HTMLElement>("#resource-status")!;
const confirmation = document.querySelector<HTMLDialogElement>(
  "#enquiry-confirmation",
)!;
let pending: HTMLAnchorElement | null = null;
let confirmedOpener: HTMLElement | null = null;
let continuing = false;

document.addEventListener(
  "click",
  (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const link = target.closest<HTMLAnchorElement>("a[href]");
    if (!link || new URL(link.href).origin !== location.origin) return;
    const resource =
      /\.pdf$/i.test(new URL(link.href).pathname) ||
      link.hasAttribute("download") ||
      link.hasAttribute("data-certificate");
    if (!resource || access.hasAccess()) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    pending = link;
    error.textContent = "";
    document.querySelector("#resource-name")!.textContent = link.hasAttribute(
      "data-certificate",
    )
      ? link.getAttribute("aria-label")
      : link.textContent?.trim() || "Company resource";
    document.querySelector("#resource-submit")!.textContent = link.hasAttribute(
      "download",
    )
      ? "Submit & download"
      : "Submit & view";
    if (!dialog.open) dialog.showModal();
  },
  true,
);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!pending || !form.reportValidity() || !human.validate()) return;
  const values = Object.fromEntries(new FormData(form));
  const result = mockResourceSubmission(values, {
    resource: new URL(pending.href).pathname,
    action: pending.hasAttribute("download") ? "download" : "view",
    sourcePage: location.pathname,
  });
  if (!result.ok) {
    error.textContent = result.error || "Please check your details.";
    return;
  }
  access.grant();
  const link = pending;
  pending = null;
  continuing = true;
  dialog.close();
  form.reset();
  status.textContent = "Thank you. Your resource is ready.";
  status.hidden = false;
  link.click();
});

dialog
  .querySelectorAll("[data-close-resource]")
  .forEach((button) => button.addEventListener("click", () => dialog.close()));
dialog.addEventListener("close", () => {
  if (continuing) {
    continuing = false;
    return;
  }
  pending?.focus({ preventScroll: true });
  pending = null;
});
document.addEventListener("mock-enquiry-submitted", () => {
  confirmedOpener = document.activeElement as HTMLElement;
  if (!confirmation.open) confirmation.showModal();
});
confirmation
  .querySelectorAll("[data-close-confirmation]")
  .forEach((button) =>
    button.addEventListener("click", () => confirmation.close()),
  );
confirmation.addEventListener("close", () =>
  confirmedOpener?.focus({ preventScroll: true }),
);
