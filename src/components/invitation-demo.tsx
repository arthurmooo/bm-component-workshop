import { AppSelect } from "./ui/app-select";
import { useState } from "react";
import { Check, Eye, PenLine, Shield, Wallet, X, Users } from "lucide-react";
import "./invitation-demo.css";
import { validateInvite } from "./invitation-model.mjs";
const roles = [
  {
    name: "Administrateur",
    detail: "Gérer l’espace et les accès",
    icon: Shield,
  },
  { name: "Éditeur", detail: "Créer et modifier les dossiers", icon: PenLine },
  { name: "Lecteur", detail: "Consulter les éléments partagés", icon: Eye },
  { name: "Facturation", detail: "Consulter les factures", icon: Wallet },
];
export function InvitationDemo() {
  const [emails, setEmails] = useState<string[]>([]),
    [input, setInput] = useState(""),
    [role, setRole] = useState("Éditeur"),
    [department, setDepartment] = useState("Équipe projet"),
    [error, setError] = useState(""),
    [done, setDone] = useState(false);
  function add() {
    const result = validateInvite(input, emails);
    const address = result.email;
    if (result.error) {
      setError(result.error);
      return false;
    }
    setEmails([...emails, address]);
    setInput("");
    setError("");
    setDone(false);
    return true;
  }
  return (
    <form
      className="invite-demo"
      onSubmit={(e) => {
        e.preventDefault();
        if (input.trim()) {
          add();
          return;
        }
        if (emails.length) setDone(true);
      }}
    >
      <div className="invite-heading">
        <Users size={19} />
        <h3>Inviter votre équipe</h3>
        <p>Préparez les accès à votre espace de travail.</p>
      </div>
      <div className="invite-fields">
        <label htmlFor="invite-emails">Adresses e-mail</label>
        <div className="invite-emails">
          {emails.map((email) => (
            <span key={email}>
              {email}
              <button
                type="button"
                aria-label={`Retirer ${email}`}
                onClick={() => {
                  setEmails(emails.filter((v) => v !== email));
                  setDone(false);
                }}
              >
                <X size={11} />
              </button>
            </span>
          ))}
          <input
            id="invite-emails"
            type="email"
            value={input}
            placeholder="nom@entreprise.com"
            onChange={(e) => {
              setInput(e.target.value);
              setError("");
              setDone(false);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                add();
              }
            }}
            aria-describedby={error ? "invite-error" : "invite-help"}
            aria-invalid={!!error}
          />
        </div>
        <p id="invite-help">Appuyez sur Entrée pour ajouter chaque adresse.</p>
        {error && (
          <p id="invite-error" role="alert">
            {error}
          </p>
        )}
        <fieldset>
          <legend>Rôle</legend>
          <div className="invite-roles">
            {roles.map(({ name, detail, icon: Icon }) => (
              <label key={name} className={role === name ? "selected" : ""}>
                <input
                  type="radio"
                  name="invite-role"
                  checked={role === name}
                  onChange={() => {
                    setRole(name);
                    setDone(false);
                  }}
                />
                <Icon size={15} />
                <span>
                  <strong>{name}</strong>
                  <small>{detail}</small>
                </span>
                {role === name && <Check size={11} />}
              </label>
            ))}
          </div>
        </fieldset>
        <label htmlFor="invite-dept">Département</label>
        <AppSelect
          id="invite-dept"
          value={department}
          onValueChange={(e) => {
            setDepartment(e);
            setDone(false);
          }}
        >
          {["Équipe projet", "Finance", "Opérations", "Commercial"].map((v) => (
            <option key={v}>{v}</option>
          ))}
        </AppSelect>
      </div>
      <footer>
        <span role="status">
          {done
            ? `${emails.length} invitation${emails.length > 1 ? "s" : ""} préparée${emails.length > 1 ? "s" : ""} · ${role}`
            : "Démonstration · aucun e-mail envoyé"}
        </span>
        <button type="submit" disabled={!emails.length && !input.trim()}>
          {done ? <Check size={12} /> : <Users size={12} />}{" "}
          {input.trim()
            ? "Ajouter l’adresse"
            : done
              ? "Préparées"
              : "Préparer les invitations"}
        </button>
      </footer>
    </form>
  );
}
