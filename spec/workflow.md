# Spec-driven change workflow

Authority: [agents.md](../agents.md). Applies to all new implementation under Jb-Service/; requirement/ is preserved input.

## 1. Before changes
1. Read [index](README.md), [change log](change-log.md), relevant specs and unresolved [decisions](decisions.md). Discover new spec files, not just a fixed list.
2. Inspect working-tree status/diff if Git exists; otherwise inspect the files to be edited. Preserve unrelated work. Do not initialise Git or commit merely to satisfy this workflow.
3. Map the logical change to R/T/A IDs and create missing tasks/criteria. Record rationale when a maintenance change has no applicable product requirement.
4. Define expected behaviour and verification. Update affected design, requirements and contracts before or together with implementation. Resolve routine choices using accepted scope; log factual uncertainties.

## 2. While implementing
Keep changes within scope and project boundaries. Update specs when implementation reveals a changed assumption. Do not modify original requirement inputs to make implementation appear compliant. Add a decision with reason when changing the approach. Do not broaden scope or silently remove documented features.

## 3. After changes: impact matrix
| File | Update when |
| --- | --- |
| requirements.md | User-visible scope, requirement status or constraints change; add stable R IDs |
| Design.md | Layout, routes, navigation, copy rules, accessibility or interactions change |
| architecture.md | Stack, dependencies with architectural effect, contracts, data flow, email, uploads, security or deployment change |
| decisions.md | Assumption, tradeoff, policy or unresolved question is added/resolved |
| tasks.md | Every implementation task progresses, completes, fails or is blocked; cite log/evidence |
| acceptance.md | Behaviour/checks change or verification occurs; record tested version/files, method and result |
| sources.md | New evidence/assets appear, source locations move or claims are verified |
| versions.md | A release/review checkpoint is created or its status changes; link included change IDs |
| README.md | A spec is added/renamed/removed or index/status changes |
| change-log.md | Every logical code or documentation change, including fixes and refactors |
| ../agents.md | Project-wide constraints, boundaries or mandatory workflow change |

Do not rewrite unaffected documents just to produce churn. The change log must name unaffected areas and explain why the existing specification still applies. New spec documents must be linked from README.md and included in this impact review.

## 4. Verification and evidence
Run tests appropriate to the actual change, not blanket repetitive tests. Link task and acceptance records to the change ID. Use PASS, FAIL, BLOCKED or NOT RUN honestly. If code changes invalidate an earlier result, retain the historical result with its tested version but mark current affected criteria NOT RUN until rechecked. For refactors verify existing behaviour; for dependencies verify build and relevant behaviour. No test required for a purely editorial change beyond relevant link/content checks.

## 5. Completion checklist
- [ ] Actual file changes reviewed; unrelated user work preserved.
- [ ] R/T/A mapping or explicit N/A rationale recorded.
- [ ] All affected specs updated; unaffected specs reviewed.
- [ ] Tasks reflect actual state, including blockers.
- [ ] Verification evidence recorded; stale results invalidated.
- [ ] Change entry complete; no secrets or customer data included.
- [ ] Release/index status accurate; links valid.
- [ ] Final response states implementation/spec updates and verification limits.

## Enforcement boundary
This is a required agent procedure, not automatic background tracking. No Git hook/CI integration has been installed. If automation is added later, it should check relevant documentation accompanies code changes; a changed Markdown file alone is not proof of semantic consistency. Always perform the impact review.
