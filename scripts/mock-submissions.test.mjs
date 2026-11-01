import test from 'node:test';
import assert from 'node:assert/strict';
import { validateResourceDetails, mockResourceSubmission, resourceAccessSession, resourceSessionKey } from '../src/lib/mock-submissions.mjs';
const details = { name: 'Demo Visitor', phone: '+91 99999 00000', company: 'Demo Company', email: 'demo@example.com' };
test('resource requests require all four bounded fields and valid contact details', () => {
  assert.equal(validateResourceDetails(details), '');
  for (const key of Object.keys(details)) {
    assert.notEqual(validateResourceDetails({...details, [key]: '  '}), '');
    assert.notEqual(validateResourceDetails({...details, [key]: 'x'.repeat(300)}), '');
  }
  for (const phone of ['hello1234567', '123', '999\n9999999']) assert.notEqual(validateResourceDetails({...details, phone}), '');
  for (const email of ['bad', 'a@b', 'a\n@b.com']) assert.notEqual(validateResourceDetails({...details, email}), '');
});
test('mock only returns resource context, never personal details or actual delivery claims', () => {
  const context={resource:'/downloads/executed-projects.pdf', action:'view', sourcePage:'/'};
  assert.deepEqual(mockResourceSubmission(details, context), {ok:true,mocked:true,context});
  assert.equal(mockResourceSubmission({...details,name:''},context).ok,false);
});
test('session grant stores only a flag and survives new page controller', () => {
  const values=new Map(); const storage={getItem:k=>values.get(k),setItem:(k,v)=>values.set(k,v)};
  const session=resourceAccessSession(()=>storage);
  assert.equal(session.hasAccess(), false); session.grant();
  assert.equal(session.hasAccess(), true);
  assert.deepEqual([...values],[[resourceSessionKey,'granted']]);
  assert.equal(resourceAccessSession(()=>storage).hasAccess(),true);
});
test('denied session storage falls back to page-memory grant', () => {
  const session=resourceAccessSession(()=>{throw Error('blocked');});
  assert.equal(session.hasAccess(),false); session.grant(); assert.equal(session.hasAccess(),true);
  assert.equal(resourceAccessSession(()=>{throw Error('blocked');}).hasAccess(),false);
});
