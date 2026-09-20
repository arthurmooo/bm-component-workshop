import { DataTable, DataRow } from "./ui/data-table";
import { useState } from "react";
import {
  Check,
  ChevronDown,
  Crown,
  Eye,
  Pencil,
  RotateCcw,
  Shield,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import "./permissions-demo.css";
const members = [
  {
    name: "Alice Martin",
    initials: "AM",
    role: "Propriétaire",
    clients: 5,
    status: "Actif",
  },
  {
    name: "Paul Laurent",
    initials: "PL",
    role: "Admin",
    clients: 5,
    status: "Actif",
  },
  {
    name: "Emma Dubois",
    initials: "ED",
    role: "Éditeur",
    clients: 3,
    status: "Actif",
  },
  {
    name: "Jules Petit",
    initials: "JP",
    role: "Lecteur",
    clients: 0,
    status: "Invité",
  },
];
const roles = [
  { name: "Propriétaire", icon: Crown },
  { name: "Admin", icon: Shield },
  { name: "Éditeur", icon: Pencil },
  { name: "Lecteur", icon: Eye },
];
export function PermissionsDemo() {
  const [rows, setRows] = useState(members);
  const [exports, setExports] = useState(["Alice Martin", "Paul Laurent"]);
  const [message, setMessage] = useState("");
  return (
    <div className="pm-demo">
      <header>
        <span>
          Membres et accès <b>4</b>
        </span>
        <button
          onClick={() => {
            setRows(members);
            setExports(["Alice Martin", "Paul Laurent"]);
            setMessage("Autorisations réinitialisées.");
          }}
        >
          <RotateCcw size={12} />
          Réinitialiser
        </button>
      </header>
      <div className="pm-scroll">
        <DataTable>
          <thead>
            <DataRow>
              <th>Membre</th>
              <th>Rôle</th>
              <th>Dossiers</th>
              <th>Export</th>
              <th>Statut</th>
            </DataRow>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <DataRow key={row.name}>
                <td data-sort-value={row.name}>
                  <div className="pm-member">
                    <span className={`pm-avatar pm-avatar-${index}`}>
                      {row.initials}
                    </span>
                    {row.name}
                  </div>
                </td>
                <td data-sort-value={row.role}>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        className="pm-role"
                        aria-label={`Rôle de ${row.name}`}
                        disabled={index === 0}
                      >
                        {row.role === "Propriétaire" ? (
                          <Crown size={12} />
                        ) : row.role === "Admin" ? (
                          <Shield size={12} />
                        ) : row.role === "Éditeur" ? (
                          <Pencil size={12} />
                        ) : (
                          <Eye size={12} />
                        )}
                        <span>{row.role}</span>
                        <ChevronDown size={12} />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {roles
                        .filter((role) => role.name !== "Propriétaire")
                        .map(({ name, icon: Icon }) => (
                          <DropdownMenuItem
                            key={name}
                            onSelect={() => {
                              setRows((items) =>
                                items.map((item) =>
                                  item.name === row.name
                                    ? { ...item, role: name }
                                    : item,
                                ),
                              );
                              if (name === "Lecteur")
                                setExports((items) =>
                                  items.filter((item) => item !== row.name),
                                );
                              setMessage(`${row.name} : rôle ${name}.`);
                            }}
                          >
                            <Icon size={13} />
                            {name}
                            {row.role === name && <Check size={12} />}
                          </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
                <td>{row.clients}</td>
                <td>
                  <input
                    type="checkbox"
                    aria-label={`Autoriser l’export pour ${row.name}`}
                    checked={exports.includes(row.name)}
                    disabled={index === 0 || row.role === "Lecteur"}
                    onChange={(e) => {
                      setExports((items) =>
                        e.target.checked
                          ? [...items, row.name]
                          : items.filter((item) => item !== row.name),
                      );
                      setMessage(`Droit d’export modifié pour ${row.name}.`);
                    }}
                  />
                </td>
                <td>
                  <span
                    className={`pm-status ${row.status === "Invité" ? "is-invited" : ""}`}
                  >
                    {row.status}
                  </span>
                </td>
              </DataRow>
            ))}
          </tbody>
        </DataTable>
      </div>
      <footer>
        Le propriétaire conserve ses droits. Un lecteur ne peut pas exporter.
      </footer>
      <p role="status">
        {message ||
          "Changements de démonstration · aucune permission réelle modifiée."}
      </p>
    </div>
  );
}
