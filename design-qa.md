# Design QA — Inbox multicanale

- Source visual truth: `/var/folders/vw/zg10gx5j553_m069s37p0nxh0000gn/T/codex-clipboard-61657f7b-3ab9-4e73-b228-e1690c585ec9.png`
- Source pixels: 4096 × 3072, desktop reference board.
- Implementation: `http://127.0.0.1:8767/#inbox-mail`, in-app browser tab 5.
- Implementation evidence: in-app browser captures, 1280 × 720 viewport, modes Email and WhatsApp.
- Comparison scope: the inbox product surface only; the photographic desktop background and the source product's global sidebar are intentionally excluded because this is a reusable library composition.
- Density normalization: source and implementation were compared as fitted desktop captures, with the central inbox surface used as the common crop.
- State: Email / Emma Dubois, then WhatsApp / Alice Martin with a locally added reply.

**Full-view comparison evidence**

- The implementation reproduces the source hierarchy that matters for the component: compact product bar, dense conversation list, dominant reader, persistent composer and restrained neutral canvas.
- Major-region proportions remain close after removing the source product's global navigation: narrow list rail, broad conversation surface, stable top bar.
- Email and WhatsApp intentionally diverge below the shared shell instead of applying one chat treatment to every channel.

**Focused region comparison evidence**

- Header: channel selector, contact identity and contextual actions are visible without competing with content.
- List: avatars, company context, timestamp, unread state and selected-row edge are legible at workshop scale.
- Email reader: subject and metadata precede a paper-like body; PDF/XLSX attachments use differentiated file treatments.
- WhatsApp reader: green-accented presence, incoming/outgoing bubbles, timestamps and read receipts create a distinct instant-messaging grammar.
- Composer: labels, color and action copy change with the active channel; a local WhatsApp reply was added successfully.

**Required fidelity surfaces**

- Fonts and typography: existing Inter variable family retained; hierarchy strengthened through 650/570 weights, compact metadata and readable message leading.
- Spacing and layout rhythm: 260 px list rail, 54 px contextual header, 500 px bounded conversation stage and anchored composer match the dense reference rhythm.
- Colors and tokens: neutral blue-grey shell follows BM; email uses slate/blue, WhatsApp uses restrained semantic green.
- Image quality and assets: existing real avatar assets are reused; all controls use the installed icon library. No reference image was rasterized into the UI.
- Copy and content: French, fictional BM business conversations; wording clearly identifies local-only actions and disconnected channels.

**Comparison history**

- Initial implementation was a flat mail-only reader with little hierarchy and no channel distinction.
- Fixed by introducing a dense two-pane shell, channel-specific lists, separate Email and WhatsApp readers, contextual toolbars, file-type treatments, bubbles, presence and read receipts.
- Post-fix browser evidence confirms both modes render, switch with motion, accept local replies and emit no console errors.

**Findings**

- No actionable P0, P1 or P2 mismatch remains within the reusable-component scope.

**Follow-up Polish**

- P3: a future library iteration could add SMS or LinkedIn as a third deliberately designed grammar, rather than extrapolating it from WhatsApp.

**Implementation Checklist**

- [x] Dense list-reader composition
- [x] Distinct Email grammar
- [x] Distinct WhatsApp grammar
- [x] Functional search, selection, archive/read controls and local replies
- [x] Responsive fallbacks and reduced-motion support
- [x] Browser interaction and console verification

final result: passed
