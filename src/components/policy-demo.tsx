import { AmountInput } from "./ui/amount-input";
import { useState } from "react";
import { FileText, Receipt, ShieldCheck, Check } from "lucide-react";
import "./policy-demo.css";
import { requiredDocuments } from "./invitation-model.mjs";
export function PolicyDemo() {
  const [threshold, setThreshold] = useState(75),
    [memo, setMemo] = useState(true),
    [receipt, setReceipt] = useState(true),
    [amount, setAmount] = useState(120);
  const applies = amount > threshold;
  return (
    <section className="policy-demo">
      <header>
        <ShieldCheck size={17} />
        <div>
          <h3>Justificatifs de dépenses</h3>
          <p>Définissez les pièces attendues au-delà d’un montant.</p>
        </div>
      </header>
      <div className="policy-rule">
        <label>
          Pour toute dépense supérieure à
          <div>
            <AmountInput
              aria-label="Seuil de dépense"
              
              min="0"
              max="100000"
              value={threshold}
              onValueChange={(e) =>
                setThreshold(
                  Math.max(0, Math.min(100000, Number(e) || 0)),
                )
              }
            />
            <span>EUR</span>
          </div>
        </label>
        <div className="policy-requirements">
          <p>Exiger les éléments suivants</p>
          <label>
            <span>
              <FileText size={16} />
              <span>
                Motif de la dépense
                <small>Une courte explication du contexte.</small>
              </span>
            </span>
            <input
              type="checkbox"
              checked={memo}
              onChange={(e) => setMemo(e.target.checked)}
            />
          </label>
          <label>
            <span>
              <Receipt size={16} />
              <span>
                Reçu ou facture
                <small>Un justificatif joint à la transaction.</small>
              </span>
            </span>
            <input
              type="checkbox"
              checked={receipt}
              onChange={(e) => setReceipt(e.target.checked)}
            />
          </label>
        </div>
      </div>
      <div className="policy-test">
        <label>
          Tester une dépense
          <div>
            <AmountInput
              aria-label="Montant de la dépense test"
              
              min="0"
              max="100000"
              value={amount}
              onValueChange={(e) =>
                setAmount(
                  Math.max(0, Math.min(100000, Number(e) || 0)),
                )
              }
            />
            <span>€</span>
          </div>
        </label>
        <p role="status">
          <Check size={12} />
          {!applies
            ? "Sous le seuil ou égal : aucune pièce imposée."
            : !memo && !receipt
              ? "Aucune pièce exigée par cette règle."
              : `À joindre : ${requiredDocuments(amount, threshold, memo, receipt).join(" et ")}.`}
        </p>
      </div>
      <footer>Règle de démonstration · aucun contrôle réel appliqué.</footer>
    </section>
  );
}
