import { useState } from "react";
import { Eye, EyeOff, CreditCard, Lock, Check, Copy } from "lucide-react";
import "./payment-card-demo.css";
export function PaymentCardDemo() {
  const [show, setShow] = useState(false);
  const [frozen, setFrozen] = useState(false);
  const [notice, setNotice] = useState("");
  return (
    <section
      className="payment-card-demo"
      aria-label="Carte de paiement fictive"
    >
      <header>
        <strong>Carte de démonstration</strong>
        <span>VIRTUELLE</span>
      </header>
      <div className="pc-card" data-frozen={frozen}>
        <div>
          <CreditCard size={20} />
          <span>
            {frozen ? (
              <>
                <Lock size={10} />
                Suspendue
              </>
            ) : (
              <>
                <Check size={10} />
                Active
              </>
            )}
          </span>
        </div>
        <p
          aria-label={
            show
              ? "Numéro fictif TEST 0000 0000 0567"
              : "Numéro masqué finissant par0567"
          }
        >
          {show ? "TEST 0000 0000 0567" : "•••• •••• •••• 0567"}
        </p>
        <footer>
          <span>
            <small>TITULAIRE</small>ALICE MARTIN
          </span>
          <span>
            <small>EXPIRE FIN</small>
            {show ? "12 / 29" : "•• / ••"}
          </span>
        </footer>
      </div>
      <div className="pc-balance">
        <span>Solde de démonstration</span>
        <strong>10 090,80 €</strong>
      </div>
      <div className="pc-actions">
        <button aria-pressed={show} onClick={() => setShow(!show)}>
          {show ? <EyeOff size={13} /> : <Eye size={13} />}{" "}
          {show ? "Masquer" : "Afficher"}
        </button>
        <button
          aria-pressed={frozen}
          onClick={() => {
            setFrozen(!frozen);
            setNotice(
              frozen ? "Carte fictive réactivée." : "Carte fictive suspendue.",
            );
          }}
        >
          <Lock size={13} />
          {frozen ? "Réactiver" : "Suspendre"}
        </button>
        <button
          onClick={async () => {
            try {
              await navigator.clipboard.writeText("DEMO-CARD-0567");
              setNotice("Identifiant de démonstration copié.");
            } catch {
              setNotice("Identifiant : DEMO-CARD-0567");
            }
          }}
        >
          <Copy size={12} />
          Copier l’ID
        </button>
      </div>
      <p className="pc-notice" role="status">
        {notice || "Carte non utilisable · aucune opération bancaire."}
      </p>
    </section>
  );
}
