import { useRef, useState } from "react";
import {
  Search,
  Archive,
  Mail,
  MailOpen,
  RotateCcw,
  FileText,
  Paperclip,
  Send,
} from "lucide-react";
import { Button } from "./ui/button";
import "./inbox-demo.css";
const messages = [
  {
    id: "emma",
    name: "Emma Dubois",
    email: "emma@example.com",
    subject: "Vos retours sur la présentation",
    preview: "La version actualisée est prête pour notre prochain point.",
    body: "Bonjour,\n\nLa présentation du dossier est prête. Vous trouverez la synthèse et le détail des hypothèses en pièces jointes.\n\nPourriez-vous confirmer les derniers arbitrages avant notre point de jeudi ?\n\nMerci,\nEmma",
    date: "10:16",
    attachments: ["Présentation.pdf", "Hypothèses.xlsx"],
  },
  {
    id: "paul",
    name: "Paul Laurent",
    email: "paul@example.com",
    subject: "Préparation du comité",
    preview: "Voici les points proposés à l’ordre du jour.",
    body: "Bonjour,\n\nJe propose de consacrer notre prochain comité aux trois scénarios et à leur calendrier de mise en œuvre.\n\nLe document préparatoire est joint.\n\nÀ bientôt,\nPaul",
    date: "Hier",
    attachments: ["Ordre du jour.docx"],
  },
  {
    id: "alice",
    name: "Alice Martin",
    email: "alice@example.com",
    subject: "Documents du dossier Nord",
    preview: "Les documents demandés sont disponibles.",
    body: "Bonjour,\n\nNous avons rassemblé les dernières informations pour le dossier Nord. Je reste disponible si un point nécessite un complément.\n\nBonne journée,\nAlice",
    date: "14 sept.",
    attachments: [],
  },
];
export function InboxDemo() {
  const [active, setActive] = useState("emma");
  const [read, setRead] = useState(["alice", "emma"]);
  const [archived, setArchived] = useState<string[]>([]);
  const [folder, setFolder] = useState("Réception");
  const [query, setQuery] = useState("");
  const [drafts, setDrafts] = useState<Record<string, string>>({});
  const reply = drafts[active] ?? "";
  const setReply = (value: string) =>
    setDrafts((items) => ({ ...items, [active]: value }));
  const searchRef = useRef<HTMLInputElement>(null);
  const [replies, setReplies] = useState<Record<string, string[]>>({});
  const [notice, setNotice] = useState("");
  const filtered = messages.filter(
    (m) =>
      (folder === "Archives"
        ? archived.includes(m.id)
        : !archived.includes(m.id)) &&
      `${m.name} ${m.subject}`
        .toLocaleLowerCase("fr")
        .includes(query.toLocaleLowerCase("fr")),
  );
  const message = filtered.find((m) => m.id === active);
  function choose(id: string) {
    setActive(id);
    setRead((items) => (items.includes(id) ? items : [...items, id]));
    setNotice("");
  }
  return (
    <section
      className="inbox-demo"
      aria-label="Boîte de réception de démonstration"
    >
      <header>
        <span>
          <Mail size={15} /> Messagerie{" "}
          <small>
            {
              messages.filter(
                (m) => !read.includes(m.id) && !archived.includes(m.id),
              ).length
            }{" "}
            non lu
          </small>
        </span>
        <Button
          small
          variant="ghost"
          aria-label="Réinitialiser la messagerie"
          onClick={() => {
            setActive("emma");
            setRead(["alice", "emma"]);
            setArchived([]);
            setFolder("Réception");
            setQuery("");
            setDrafts({});
            setReplies({});
            setNotice("");
          }}
        >
          <RotateCcw size={12} />
        </Button>
      </header>
      <div className="inbox-folders">
        {["Réception", "Archives"].map((f) => (
          <button
            key={f}
            aria-pressed={folder === f}
            onClick={() => {
              setFolder(f);
            }}
          >
            {f === "Réception" ? <Mail size={13} /> : <Archive size={13} />} {f}{" "}
            <small>
              {f === "Archives"
                ? archived.length
                : messages.length - archived.length}
            </small>
          </button>
        ))}
      </div>
      <div className="inbox-columns">
        <aside>
          <label className="inbox-search">
            <Search size={13} />
            <input
              ref={searchRef}
              placeholder="Rechercher…"
              aria-label="Rechercher un message"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
          {filtered.map((m) => (
            <button
              key={m.id}
              className="inbox-message-row"
              aria-pressed={m.id === active}
              data-unread={!read.includes(m.id)}
              onClick={() => choose(m.id)}
            >
              <img src={`./avatars/${m.id}.svg`} alt="" />
              <span>
                <span className="inbox-row-sender">
                  <strong>{m.name}</strong>
                  <time>{m.date}</time>
                </span>
                <strong className="inbox-row-subject">{m.subject}</strong>
                <small>{m.preview}</small>
              </span>
              {!read.includes(m.id) && <i aria-label="Non lu" />}
            </button>
          ))}
          {!filtered.length && (
            <p className="inbox-empty">Aucun message dans cette vue.</p>
          )}
        </aside>
        <div className="inbox-reader">
          {message ? (
            <>
              <div className="inbox-message-actions">
                <Button
                  small
                  variant="ghost"
                  onClick={() => {
                    setArchived((items) =>
                      items.includes(message.id)
                        ? items.filter((id) => id !== message.id)
                        : [...items, message.id],
                    );
                    searchRef.current?.focus();
                    setNotice(
                      folder === "Archives"
                        ? "Message restauré dans la réception."
                        : "Message déplacé dans les archives.",
                    );
                  }}
                >
                  <Archive size={13} />
                  {folder === "Archives" ? "Restaurer" : "Archiver"}
                </Button>
                <Button
                  small
                  variant="ghost"
                  onClick={() => {
                    setRead((items) =>
                      items.includes(message.id)
                        ? items.filter((id) => id !== message.id)
                        : [...items, message.id],
                    );
                    setNotice(
                      read.includes(message.id)
                        ? "Message marqué non lu."
                        : "Message marqué lu.",
                    );
                  }}
                >
                  {read.includes(message.id) ? (
                    <Mail size={13} />
                  ) : (
                    <MailOpen size={13} />
                  )}{" "}
                  {read.includes(message.id) ? "Marquer non lu" : "Marquer lu"}
                </Button>
              </div>
              <div className="inbox-sender">
                <img src={`./avatars/${message.id}.svg`} alt="" />
                <div>
                  <strong>{message.name}</strong>
                  <small>De : {message.email}</small>
                </div>
                <time>{message.date}</time>
              </div>
              <h3>{message.subject}</h3>
              <p className="inbox-message-body">{message.body}</p>
              {message.attachments.length > 0 && (
                <section
                  className="inbox-attachments"
                  aria-label="Pièces jointes"
                >
                  <span>
                    <Paperclip size={12} /> {message.attachments.length} pièces
                    jointes
                  </span>
                  <div>
                    {message.attachments.map((file, i) => (
                      <button
                        key={file}
                        onClick={() =>
                          setNotice(
                            `${file} : pièce jointe fictive, aucun fichier à télécharger.`,
                          )
                        }
                      >
                        <FileText size={19} />
                        <span>
                          <strong>{file}</strong>
                          <small>{i === 0 ? "2 Mo" : "234 Ko"} · exemple</small>
                        </span>
                      </button>
                    ))}
                  </div>
                </section>
              )}
              {(replies[message.id] ?? []).map((text, i) => (
                <div className="inbox-local-reply" key={i}>
                  <strong>Vous · brouillon local</strong>
                  <p>{text}</p>
                </div>
              ))}
              <form
                className="inbox-reply"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!reply.trim()) return;
                  setReplies((items) => ({
                    ...items,
                    [message.id]: [...(items[message.id] ?? []), reply.trim()],
                  }));
                  setReply("");
                  setNotice(
                    "Brouillon ajouté localement. Aucun e-mail envoyé.",
                  );
                }}
              >
                <textarea
                  aria-label="Brouillon de réponse"
                  placeholder="Rédiger une réponse…"
                  value={reply}
                  maxLength={2000}
                  onChange={(e) => setReply(e.target.value)}
                />
                <button type="submit" disabled={!reply.trim()}>
                  <Send size={12} /> Ajouter le brouillon
                </button>
              </form>
            </>
          ) : (
            <div className="inbox-reader-empty">
              <MailOpen size={24} />
              <p>Sélectionnez un message.</p>
            </div>
          )}
        </div>
      </div>
      <footer role="status">
        {notice ||
          "Messages et contacts fictifs · aucune boîte réelle connectée."}
      </footer>
    </section>
  );
}
