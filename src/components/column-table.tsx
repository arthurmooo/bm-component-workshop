import { DataTable, DataRow } from './ui/data-table';
import { StatusBadge } from './status-badge';
import './column-table.css';
const sample = [
  {
    id: "1",
    company: "Atelier Nord",
    owner: "Alice Martin",
    amount: 480000,
    stage: "Qualification",
    color: "#79a8ad",
  },
  {
    id: "2",
    company: "Maison Astrée",
    owner: "Paul Laurent",
    amount: 1250000,
    stage: "Négociation",
    color: "#aaa0c2",
  },
  {
    id: "3",
    company: "Studio Rivage",
    owner: "Emma Dubois",
    amount: 320000,
    stage: "Découverte",
    color: "#caa37e",
  },
  {
    id: "4",
    company: "Alto Industrie",
    owner: "Alice Martin",
    amount: 860000,
    stage: "Qualification",
    color: "#90a49b",
  },
  {
    id: "5",
    company: "Groupe Opaline",
    owner: "Paul Laurent",
    amount: 670000,
    stage: "Négociation",
    color: "#9ba9c7",
  },
];
const currency = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

export function ColumnTable(){return <div className="table-demo resizable-table"><div className="table-caption">Sociétés <small>{sample.length}</small></div><div className="table-scroll"><DataTable aria-label="Sociétés de démonstration"><thead><DataRow><th>Société</th><th>Responsable</th><th>Montant</th><th>Étape</th></DataRow></thead><tbody>{sample.map(row=><DataRow key={row.id}><td data-sort-value={row.company}><span className="company-name"><i style={{background:row.color}} aria-hidden="true">{row.company[0]}</i>{row.company}</span></td><td><span className="owner-identity"><img className="owner-avatar" src={`./avatars/${row.owner === "Alice Martin" ? "alice" : row.owner === "Paul Laurent" ? "paul" : "emma"}.svg`} alt=""/><span>{row.owner}</span></span></td><td className="money" data-sort-value={row.amount}>{currency.format(row.amount)}</td><td data-sort-value={row.stage}><StatusBadge status={row.stage==='Négociation'?'progress':row.stage==='Qualification'?'review':'pending'} label={row.stage}/></td></DataRow>)}</tbody></DataTable></div></div>}
