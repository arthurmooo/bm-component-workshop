import { useId, useRef, useState } from "react";
import { ChevronDown, X, Send, Clock3 } from "lucide-react";
import * as Dropdown from "@radix-ui/react-dropdown-menu";
import "./mail-recipients.css";
type Recipient = { name: string; email: string; avatar?: string };
const initial: Recipient = {
  name: "Alice Martin",
  email: "alice@example.com",
  avatar: "avatars/alice.svg",
};
export function MailRecipients({ onSend, disabled = false }: { onSend: (recipients: string[]) => void; disabled?: boolean }) {
  const uid = useId();
  const inputs = useRef<Record<string, HTMLInputElement | null>>({});
  const [recipients, setRecipients] = useState<Record<string, Recipient[]>>({
    À: [initial],
    Cc: [],
    Cci: [],
  });
  const [visible, setVisible] = useState(["À"]);
  const [draft, setDraft] = useState<Record<string, string>>({});
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const validEmail = (value: string) =>
    /^[^\s@,;]+@[^\s@,;]+\.[^\s@,;]+$/.test(value);
  const hasInvalidDraft = Object.values(draft).some(
    (value) => value.trim() && !validEmail(value.trim()),
  );
  function add(kind: string) {
    const value = (draft[kind] || "").trim().toLowerCase();
    if (!value) return;
    if (!validEmail(value)) {
      setError("Saisissez une adresse e-mail valide.");
      return;
    }
    if (
      Object.values(recipients).some((items) =>
        items.some((r) => r.email.toLowerCase() === value),
      )
    ) {
      setDraft((current) => ({ ...current, [kind]: "" }));
      setError("");
      setNotice("Cette adresse est déjà présente parmi les destinataires.");
      return;
    }
    setRecipients((current) => ({
      ...current,
      [kind]: [...current[kind], { name: value, email: value }],
    }));
    setDraft((current) => ({ ...current, [kind]: "" }));
    setError("");
    setNotice("");
  }
  return (
    <div className="mail-recipients">
      {visible.map((kind) => (
        <div className="mail-recipient-row" key={kind}>
          <label htmlFor={uid + "-recipient-" + kind}>{kind}</label>
          <div className="mail-recipient-items">
            {recipients[kind].map((r) => (
              <span className="recipient-chip" key={r.email} title={r.email}>
                {r.avatar && <img src={r.avatar} alt="" />}
                <span className="recipient-name">{r.name}</span>
                <button
                  type="button"
                  aria-label={"Retirer " + r.name + " de " + kind}
                  onClick={() => {
                    setRecipients((current) => ({
                      ...current,
                      [kind]: current[kind].filter((x) => x.email !== r.email),
                    }));
                    inputs.current[kind]?.focus();
                    setNotice("Destinataire retiré.");
                  }}
                >
                  <X size={11} />
                </button>
              </span>
            ))}
            <input
              ref={(el) => {
                inputs.current[kind] = el;
              }}
              autoComplete="off"
              type="text"
              inputMode="email"
              aria-invalid={Boolean(
                draft[kind]?.trim() && !validEmail(draft[kind].trim()),
              )}
              id={uid + "-recipient-" + kind}
              aria-label={"Ajouter destinataire " + kind}
              value={draft[kind] || ""}
              placeholder="Ajouter une adresse…"
              onChange={(e) => {
                setDraft({ ...draft, [kind]: e.target.value });
                setError("");
                setNotice("");
              }}
              onBlur={() => add(kind)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === ",") {
                  e.preventDefault();
                  add(kind);
                }
              }}
            />
          </div>
          {kind === "À" && (
            <div className="mail-cc">
              {["Cc", "Cci"]
                .filter((k) => !visible.includes(k))
                .map((k) => (
                  <button
                    type="button"
                    key={k}
                    onClick={() => setVisible([...visible, k])}
                  >
                    {k}
                  </button>
                ))}
            </div>
          )}
        </div>
      ))}
      {error && <p role="alert">{error}</p>}
      <div className="mail-send-row">
        <span role="status">{notice || "Destinataires de démonstration"}</span>
        <div className="mail-split">
          <button
            type="button"
            disabled={disabled || !recipients["À"].length || hasInvalidDraft}
            onClick={() => onSend(Object.values(recipients).flat().map(r => r.email))}
          >
            <Send size={12} />
            Tester l’envoi
          </button>
          <Dropdown.Root>
            <Dropdown.Trigger
              aria-label="Options d’envoi"
              disabled={disabled || !recipients["À"].length || hasInvalidDraft}
            >
              <ChevronDown size={12} />
            </Dropdown.Trigger>
            <Dropdown.Portal>
              <Dropdown.Content
                className="mail-send-menu"
                align="start"
                sideOffset={5}
              >
                <Dropdown.Item
                  onSelect={() =>
                    setNotice("Programmé en simulation · demain à 09:00")
                  }
                >
                  <Clock3 size={13} />
                  Demain à 09:00
                </Dropdown.Item>
                <Dropdown.Item
                  onSelect={() =>
                    setNotice("Programmé en simulation · lundi à 09:00")
                  }
                >
                  <Clock3 size={13} />
                  Lundi à 09:00
                </Dropdown.Item>
              </Dropdown.Content>
            </Dropdown.Portal>
          </Dropdown.Root>
        </div>
      </div>
    </div>
  );
}
