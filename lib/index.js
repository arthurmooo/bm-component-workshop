var Ur = (e) => {
  throw TypeError(e);
};
var Kr = (e, t, n) => t.has(e) || Ur("Cannot " + n);
var ae = (e, t, n) => (Kr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), qr = (e, t, n) => t.has(e) ? Ur("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), xn = (e, t, n, i) => (Kr(e, t, "write to private field"), i ? i.call(e, n) : t.set(e, n), n);
import { jsx as r, jsxs as l, Fragment as q } from "react/jsx-runtime";
import * as b from "react";
import { forwardRef as ft, createElement as On, useState as H, useId as ue, useLayoutEffect as tn, useRef as Z, Children as Ln, isValidElement as _i, Fragment as nn, createContext as Qo, useContext as es, cloneElement as _n, useEffect as ce, useMemo as ts, useReducer as ns, useCallback as rt } from "react";
import { useReducedMotion as pt, motion as re, AnimatePresence as lt } from "motion/react";
import * as rr from "react-dom";
import { createPortal as rs } from "react-dom";
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const is = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Fi = (...e) => e.filter((t, n, i) => !!t && t.trim() !== "" && i.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var as = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const os = ft(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: i,
    className: a = "",
    children: o,
    iconNode: s,
    ...c
  }, d) => On(
    "svg",
    {
      ref: d,
      ...as,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: i ? Number(n) * 24 / Number(t) : n,
      className: Fi("lucide", a),
      ...c
    },
    [
      ...s.map(([p, h]) => On(p, h)),
      ...Array.isArray(o) ? o : [o]
    ]
  )
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const W = (e, t) => {
  const n = ft(
    ({ className: i, ...a }, o) => On(os, {
      ref: o,
      iconNode: t,
      className: Fi(`lucide-${is(e)}`, i),
      ...a
    })
  );
  return n.displayName = `${e}`, n;
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kt = W("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ss = W("ArrowLeftToLine", [
  ["path", { d: "M3 19V5", key: "rwsyhb" }],
  ["path", { d: "m13 6-6 6 6 6", key: "1yhaz7" }],
  ["path", { d: "M7 12h14", key: "uoisry" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zi = W("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cs = W("ArrowRightToLine", [
  ["path", { d: "M17 12H3", key: "8awo09" }],
  ["path", { d: "m11 18 6-6-6-6", key: "8c2y43" }],
  ["path", { d: "M21 5v14", key: "nzette" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bi = W("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yr = W("ArrowUpRight", [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qt = W("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ls = W("Banknote", [
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M6 12h.01M18 12h.01", key: "113zkx" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ds = W("Bold", [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xr = W("Bot", [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const us = W("Brain", [
  [
    "path",
    {
      d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
      key: "l5xja"
    }
  ],
  [
    "path",
    {
      d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
      key: "ep3f8r"
    }
  ],
  ["path", { d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4", key: "1p4c4q" }],
  ["path", { d: "M17.599 6.5a3 3 0 0 0 .399-1.375", key: "tmeiqw" }],
  ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5", key: "105sqy" }],
  ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396", key: "ql3yin" }],
  ["path", { d: "M19.938 10.5a4 4 0 0 1 .585.396", key: "1qfode" }],
  ["path", { d: "M6 18a4 4 0 0 1-1.967-.516", key: "2e4loj" }],
  ["path", { d: "M19.967 17.484A4 4 0 0 1 18 18", key: "159ez6" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zr = W("BriefcaseBusiness", [
  ["path", { d: "M12 12h.01", key: "1mp3jc" }],
  ["path", { d: "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2", key: "1ksdt3" }],
  ["path", { d: "M22 13a18.15 18.15 0 0 1-20 0", key: "12hx5q" }],
  ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ji = W("Building2", [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const je = W("CalendarDays", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M16 18h.01", key: "kzsmim" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vi = W("ChartNoAxesCombined", [
  ["path", { d: "M12 16v5", key: "zza2cw" }],
  ["path", { d: "M16 14v7", key: "1g90b9" }],
  ["path", { d: "M20 10v11", key: "1iqoj0" }],
  [
    "path",
    { d: "m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15", key: "1fw8x9" }
  ],
  ["path", { d: "M4 18v3", key: "1yp0dc" }],
  ["path", { d: "M8 14v7", key: "n3cwzv" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const te = W("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ue = W("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wi = W("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const be = W("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hi = W("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hs = W("CircleX", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rn = W("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gi = W("Clock3", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16.5 12", key: "1aq6pp" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ir = W("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fs = W("Columns3", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ps = W("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jr = W("Cpu", [
  ["rect", { width: "16", height: "16", x: "4", y: "4", rx: "2", key: "14l7u7" }],
  ["rect", { width: "6", height: "6", x: "9", y: "9", rx: "1", key: "5aljv4" }],
  ["path", { d: "M15 2v2", key: "13l42r" }],
  ["path", { d: "M15 20v2", key: "15mkzm" }],
  ["path", { d: "M2 15h2", key: "1gxd5l" }],
  ["path", { d: "M2 9h2", key: "1bbxkp" }],
  ["path", { d: "M20 15h2", key: "19e6y8" }],
  ["path", { d: "M20 9h2", key: "19tzq7" }],
  ["path", { d: "M9 2v2", key: "165o2o" }],
  ["path", { d: "M9 20v2", key: "i2bqo8" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ms = W("Ellipsis", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vs = W("FileCheck2", [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4", key: "1pf5j1" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m3 15 2 2 4-4", key: "1lhrkk" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gs = W("FileSpreadsheet", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M8 13h2", key: "yr2amv" }],
  ["path", { d: "M14 13h2", key: "un5t4a" }],
  ["path", { d: "M8 17h2", key: "2yhykz" }],
  ["path", { d: "M14 17h2", key: "10kma7" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ne = W("FileText", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bs = W("Files", [
  ["path", { d: "M20 7h-3a2 2 0 0 1-2-2V2", key: "x099mo" }],
  ["path", { d: "M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z", key: "18t6ie" }],
  ["path", { d: "M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8", key: "1nja0z" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ys = W("FolderOpen", [
  [
    "path",
    {
      d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
      key: "usdka0"
    }
  ]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ws = W("FolderSearch", [
  [
    "path",
    {
      d: "M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1",
      key: "1bw5m7"
    }
  ],
  ["path", { d: "m21 21-1.9-1.9", key: "1g2n9r" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xs = W("Globe", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ks = W("GripVertical", [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cs = W("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ms = W("Italic", [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zh = W("LayoutDashboard", [
  ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }],
  ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" }],
  ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" }],
  ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bh = W("Library", [
  ["path", { d: "m16 6 4 14", key: "ji33uf" }],
  ["path", { d: "M12 6v14", key: "1n7gus" }],
  ["path", { d: "M8 8v12", key: "1gg7y9" }],
  ["path", { d: "M4 4v16", key: "6qkkli" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ns = W("Link2", [
  ["path", { d: "M9 17H7A5 5 0 0 1 7 7h2", key: "8i5ue5" }],
  ["path", { d: "M15 7h2a5 5 0 1 1 0 10h-2", key: "1b9ql8" }],
  ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ui = W("List", [
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 18h.01", key: "1tta3j" }],
  ["path", { d: "M3 6h.01", key: "1rqtza" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 18h13", key: "1lx6n3" }],
  ["path", { d: "M8 6h13", key: "ik3vkj" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ar = W("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ki = W("LockKeyhole", [
  ["circle", { cx: "12", cy: "16", r: "1", key: "1au0dj" }],
  ["rect", { x: "3", y: "10", width: "18", height: "12", rx: "2", key: "6s8ecr" }],
  ["path", { d: "M7 10V7a5 5 0 0 1 10 0v3", key: "1pqi11" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const or = W("MapPin", [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ss = W("MessageCircle", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jh = W("MessageSquare", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ps = W("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Es = W("Paperclip", [
  ["path", { d: "M13.234 20.252 21 12.3", key: "1cbrk9" }],
  [
    "path",
    {
      d: "m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486",
      key: "1pkts6"
    }
  ]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qi = W("Pause", [
  ["rect", { x: "14", y: "4", width: "4", height: "16", rx: "1", key: "zuxfzm" }],
  ["rect", { x: "6", y: "4", width: "4", height: "16", rx: "1", key: "1okwgv" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qr = W("Play", [
  ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rs = W("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rt = W("RotateCcw", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sr = W("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yi = W("Send", [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const As = W("SlidersHorizontal", [
  ["line", { x1: "21", x2: "14", y1: "4", y2: "4", key: "obuewd" }],
  ["line", { x1: "10", x2: "3", y1: "4", y2: "4", key: "1q6298" }],
  ["line", { x1: "21", x2: "12", y1: "12", y2: "12", key: "1iu8h1" }],
  ["line", { x1: "8", x2: "3", y1: "12", y2: "12", key: "ntss68" }],
  ["line", { x1: "21", x2: "16", y1: "20", y2: "20", key: "14d8ph" }],
  ["line", { x1: "12", x2: "3", y1: "20", y2: "20", key: "m0wm8r" }],
  ["line", { x1: "14", x2: "14", y1: "2", y2: "6", key: "14e1ph" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
  ["line", { x1: "16", x2: "16", y1: "18", y2: "22", key: "1lctlv" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xi = W("Sparkles", [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx"
    }
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $s = W("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ds = W("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ze = W("TriangleAlert", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Is = W("Truck", [
  ["path", { d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2", key: "wrbu53" }],
  ["path", { d: "M15 18H9", key: "1lyqi6" }],
  [
    "path",
    {
      d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
      key: "lysw3i"
    }
  ],
  ["circle", { cx: "17", cy: "18", r: "2", key: "332jqn" }],
  ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ts = W("Upload", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Os = W("UserRound", [
  ["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }],
  ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ei = W("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ls = W("Video", [
  [
    "path",
    {
      d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
      key: "ftymec"
    }
  ],
  ["rect", { x: "2", y: "6", width: "14", height: "12", rx: "2", key: "158x01" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mt = W("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _s = W("Zap", [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
]), Fn = {
  feedback: 0.14,
  reveal: 0.24,
  ease: [0.22, 1, 0.36, 1]
};
function At({ open: e, children: t }) {
  const n = pt();
  return /* @__PURE__ */ r(
    re.div,
    {
      className: "animated-reveal",
      inert: !e,
      "aria-hidden": !e,
      initial: !1,
      animate: { height: e ? "auto" : 0, opacity: e ? 1 : 0 },
      transition: { duration: n ? 0 : Fn.reveal, ease: Fn.ease },
      style: { overflow: "hidden" },
      children: /* @__PURE__ */ r("div", { style: { display: "flow-root" }, children: t })
    }
  );
}
function Vh({ title: e = "À traiter aujourd’hui", items: t, onOpen: n, onDone: i, wide: a = !1, locale: o = "fr" }) {
  var d;
  const [s, c] = H(((d = t[0]) == null ? void 0 : d.id) ?? null);
  return /* @__PURE__ */ l("div", { className: `wc-demo${a ? " wc-demo-wide" : ""}`, children: [
    /* @__PURE__ */ l("div", { className: "wc-topline", children: [
      /* @__PURE__ */ r("span", { children: e }),
      /* @__PURE__ */ l("span", { children: [
        t.length,
        " ",
        o === "en" ? "actions" : "dossiers"
      ] })
    ] }),
    /* @__PURE__ */ r("div", { className: "wc-demo-list", children: t.map((p) => /* @__PURE__ */ l("article", { className: "wc-envelope", children: [
      /* @__PURE__ */ l("header", { children: [
        /* @__PURE__ */ r("span", { className: "wc-person", "aria-hidden": "true", style: p.photoUrl ? { backgroundImage: `url(${p.photoUrl})`, backgroundSize: "300% 100%", backgroundPosition: p.photoPosition } : void 0, children: !p.photoUrl && p.initials }),
        /* @__PURE__ */ r("strong", { children: p.author }),
        p.priority && /* @__PURE__ */ r("span", { className: "wc-priority", children: p.priority }),
        /* @__PURE__ */ r("time", { children: p.meta }),
        /* @__PURE__ */ r("button", { "aria-label": s === p.id ? o === "en" ? "Collapse action" : "Réduire le dossier" : o === "en" ? "Expand action" : "Développer le dossier", "aria-expanded": s === p.id, onClick: () => c(s === p.id ? null : p.id), children: /* @__PURE__ */ r(Ue, { size: 14, style: { transform: s === p.id ? "none" : "rotate(-90deg)" } }) })
      ] }),
      /* @__PURE__ */ l("div", { className: "wc-inner", children: [
        p.context && /* @__PURE__ */ r("span", { className: "wc-context", children: p.context }),
        /* @__PURE__ */ r("h3", { children: p.title }),
        /* @__PURE__ */ r("p", { children: p.description }),
        /* @__PURE__ */ r(At, { open: s === p.id, children: /* @__PURE__ */ l(q, { children: [
          p.reason && /* @__PURE__ */ r("p", { className: "wc-reason", children: p.reason }),
          /* @__PURE__ */ l("footer", { children: [
            /* @__PURE__ */ l("button", { className: "wc-primary", onClick: () => n(p.id), children: [
              /* @__PURE__ */ r(vs, { size: 13 }),
              o === "en" ? "Open" : "Ouvrir"
            ] }),
            /* @__PURE__ */ l("button", { onClick: () => i(p.id), children: [
              /* @__PURE__ */ r(te, { size: 13 }),
              o === "en" ? "Mark done" : "Marquer terminé"
            ] })
          ] })
        ] }) })
      ] })
    ] }, p.id)) })
  ] });
}
function Fs({ level: e, title: t, value: n, action: i, detail: a, layout: o = "card" }) {
  return o === "banner" ? /* @__PURE__ */ l("section", { className: `wc-alert wc-alert-${e} wc-alert-banner`, children: [
    /* @__PURE__ */ l("div", { className: "wc-alert-banner-copy", children: [
      /* @__PURE__ */ l("header", { children: [
        e === "aucun" ? /* @__PURE__ */ r(te, { size: 17 }) : /* @__PURE__ */ r(Ze, { size: 17 }),
        /* @__PURE__ */ r("span", { children: t })
      ] }),
      /* @__PURE__ */ r("strong", { children: n }),
      a && /* @__PURE__ */ r("p", { children: a })
    ] }),
    i && /* @__PURE__ */ r("div", { className: "wc-alert-banner-action", children: i })
  ] }) : /* @__PURE__ */ l("div", { className: `wc-alert wc-alert-${e}`, children: [
    /* @__PURE__ */ l("header", { children: [
      e === "aucun" ? /* @__PURE__ */ r(te, { size: 17 }) : /* @__PURE__ */ r(Ze, { size: 17 }),
      /* @__PURE__ */ r("span", { children: t })
    ] }),
    /* @__PURE__ */ l("div", { className: "wc-alert-body", children: [
      /* @__PURE__ */ r("strong", { children: n }),
      /* @__PURE__ */ l("p", { children: [
        typeof i == "string" ? /* @__PURE__ */ r("b", { children: i }) : i,
        " ",
        a
      ] })
    ] })
  ] });
}
function $t({ className: e = "", ...t }) {
  return /* @__PURE__ */ r("section", { className: `bm-card ${e}`, ...t });
}
function cr({ title: e, description: t, action: n }) {
  return /* @__PURE__ */ l("header", { className: "bm-card-header", children: [
    /* @__PURE__ */ l("div", { children: [
      /* @__PURE__ */ r("h2", { children: e }),
      t && /* @__PURE__ */ r("p", { children: t })
    ] }),
    n
  ] });
}
const lr = ft(({ className: e = "", ...t }, n) => /* @__PURE__ */ r("input", { ref: n, className: `bm-input ${e}`, ...t }));
lr.displayName = "Input";
function zs({ label: e, hint: t, error: n, id: i, ...a }) {
  const o = ue(), s = i ?? o, c = [a["aria-describedby"], t ? `${s}-hint` : null, n ? `${s}-error` : null].filter(Boolean).join(" ") || void 0;
  return /* @__PURE__ */ l("div", { className: "bm-field", children: [
    /* @__PURE__ */ r("label", { htmlFor: s, children: e }),
    /* @__PURE__ */ r(lr, { ...a, id: s, "aria-invalid": !!n || a["aria-invalid"], "aria-describedby": c }),
    t && /* @__PURE__ */ r("p", { className: "bm-field-hint", id: `${s}-hint`, children: t }),
    n && /* @__PURE__ */ r("p", { role: "alert", className: "bm-field-hint bm-field-error", id: `${s}-error`, children: n })
  ] });
}
function Wh({ label: e, value: t, detail: n, tone: i }) {
  return i ? /* @__PURE__ */ r(Fs, { level: i === "critical" ? "critique" : i === "warning" ? "attention" : i === "positive" ? "aucun" : "neutre", title: e, value: t, action: i === "critical" ? "ACTION" : i === "warning" ? "REVIEW" : i === "positive" ? "VERIFIED" : "STATUS", detail: String(n ?? "") }) : /* @__PURE__ */ l($t, { children: [
    /* @__PURE__ */ r("span", { className: "bm-metric-label", children: e }),
    /* @__PURE__ */ r("strong", { className: "bm-metric-value", children: t }),
    n && /* @__PURE__ */ r("p", { className: "bm-metric-detail", children: n })
  ] });
}
function Zi({ title: e, description: t, action: n }) {
  return /* @__PURE__ */ l("div", { className: "bm-empty", children: [
    /* @__PURE__ */ r("h3", { children: e }),
    /* @__PURE__ */ r("p", { children: t }),
    n
  ] });
}
const U = ft(
  ({
    variant: e = "default",
    small: t = !1,
    className: n = "",
    type: i = "button",
    ...a
  }, o) => /* @__PURE__ */ r(
    "button",
    {
      ref: o,
      type: i,
      className: `button ${e} ${t ? "small" : ""} ${n}`,
      ...a
    }
  )
);
U.displayName = "Button";
var Bs = Object.defineProperty, vt = (e, t) => Bs(e, "name", { value: t, configurable: !0 }), Ji = !!(typeof window < "u" && window.document && window.document.createElement);
function Y(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return /* @__PURE__ */ vt(function(a) {
    if (e == null || e(a), n === !1 || !a || !a.defaultPrevented)
      return t == null ? void 0 : t(a);
  }, "handleEvent");
}
vt(Y, "composeEventHandlers");
function js(e) {
  var t;
  if (!Ji)
    throw new Error("Cannot access window outside of the DOM");
  return ((t = e == null ? void 0 : e.ownerDocument) == null ? void 0 : t.defaultView) ?? window;
}
vt(js, "getOwnerWindow");
function zn(e) {
  if (!Ji)
    throw new Error("Cannot access document outside of the DOM");
  return (e == null ? void 0 : e.ownerDocument) ?? document;
}
vt(zn, "getOwnerDocument");
function Qi(e, t = !1) {
  const { activeElement: n } = zn(e);
  if (!(n != null && n.nodeName))
    return null;
  if (ea(n) && n.contentDocument)
    return Qi(n.contentDocument.body, t);
  if (t) {
    const i = n.getAttribute("aria-activedescendant");
    if (i) {
      const a = zn(n).getElementById(i);
      if (a)
        return a;
    }
  }
  return n;
}
vt(Qi, "getActiveElement");
function ea(e) {
  return e.tagName === "IFRAME";
}
vt(ea, "isFrame");
var Vs = Object.defineProperty, dr = (e, t) => Vs(e, "name", { value: t, configurable: !0 });
function Bn(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
dr(Bn, "setRef");
function ta(...e) {
  return (t) => {
    let n = !1;
    const i = e.map((a) => {
      const o = Bn(a, t);
      return !n && typeof o == "function" && (n = !0), o;
    });
    if (n)
      return () => {
        for (let a = 0; a < i.length; a++) {
          const o = i[a];
          typeof o == "function" ? o() : Bn(e[a], null);
        }
      };
  };
}
dr(ta, "composeRefs");
function ee(...e) {
  return b.useCallback(ta(...e), e);
}
dr(ee, "useComposedRefs");
var Ws = Object.defineProperty, pe = (e, t) => Ws(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function Hs(e, t) {
  const n = b.createContext(t);
  n.displayName = e + "Context";
  const i = /* @__PURE__ */ pe((o) => {
    const { children: s, ...c } = o, d = b.useMemo(() => c, Object.values(c));
    return /* @__PURE__ */ r(n.Provider, { value: d, children: s });
  }, "Provider");
  i.displayName = e + "Provider";
  function a(o, s = {}) {
    const { optional: c = !1 } = s, d = b.useContext(n);
    if (d) return d;
    if (t !== void 0) return t;
    if (!c)
      throw new Error(`\`${o}\` must be used within \`${e}\``);
  }
  return pe(a, "useContext"), [i, a];
}
pe(Hs, "createContext");
// @__NO_SIDE_EFFECTS__
function Le(e, t = []) {
  let n = [];
  function i(o, s) {
    const c = b.createContext(s);
    c.displayName = o + "Context";
    const d = n.length;
    n = [...n, s];
    const p = /* @__PURE__ */ pe((f) => {
      var w;
      const { scope: u, children: g, ...m } = f, v = ((w = u == null ? void 0 : u[e]) == null ? void 0 : w[d]) || c, y = b.useMemo(() => m, Object.values(m));
      return /* @__PURE__ */ r(v.Provider, { value: y, children: g });
    }, "Provider");
    p.displayName = o + "Provider";
    function h(f, u, g = {}) {
      var w;
      const { optional: m = !1 } = g, v = ((w = u == null ? void 0 : u[e]) == null ? void 0 : w[d]) || c, y = b.useContext(v);
      if (y) return y;
      if (s !== void 0) return s;
      if (!m)
        throw new Error(`\`${f}\` must be used within \`${o}\``);
    }
    return pe(h, "useContext"), [p, h];
  }
  pe(i, "createContext");
  const a = /* @__PURE__ */ pe(() => {
    const o = n.map((s) => b.createContext(s));
    return /* @__PURE__ */ pe(function(c) {
      const d = (c == null ? void 0 : c[e]) || o;
      return b.useMemo(
        () => ({ [`__scope${e}`]: { ...c, [e]: d } }),
        [c, d]
      );
    }, "useScope");
  }, "createScope");
  return a.scopeName = e, [i, na(a, ...t)];
}
pe(Le, "createContextScope");
function na(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = /* @__PURE__ */ pe(() => {
    const i = e.map((a) => ({
      useScope: a(),
      scopeName: a.scopeName
    }));
    return /* @__PURE__ */ pe(function(o) {
      const s = i.reduce((c, { useScope: d, scopeName: p }) => {
        const f = d(o)[`__scope${p}`];
        return { ...c, ...f };
      }, {});
      return b.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    }, "useComposedScopes");
  }, "createScope");
  return n.scopeName = t.scopeName, n;
}
pe(na, "composeContextScopes");
var ye = globalThis != null && globalThis.document ? b.useLayoutEffect : () => {
}, Gs = Object.defineProperty, Us = (e, t) => Gs(e, "name", { value: t, configurable: !0 }), ti = b[" useEffectEvent ".trim().toString()], ni = b[" useInsertionEffect ".trim().toString()];
function ra(e) {
  if (typeof ti == "function")
    return ti(e);
  const t = b.useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  return typeof ni == "function" ? ni(() => {
    t.current = e;
  }) : ye(() => {
    t.current = e;
  }), b.useMemo(() => ((...n) => {
    var i;
    return (i = t.current) == null ? void 0 : i.call(t, ...n);
  }), []);
}
Us(ra, "useEffectEvent");
var Ks = Object.defineProperty, Dt = (e, t) => Ks(e, "name", { value: t, configurable: !0 }), qs = b[" useInsertionEffect ".trim().toString()] || ye;
function et({
  prop: e,
  defaultProp: t,
  onChange: n = /* @__PURE__ */ Dt(() => {
  }, "onChange"),
  caller: i
}) {
  const [a, o, s] = ia({
    defaultProp: t,
    onChange: n
  }), c = e !== void 0, d = c ? e : a, p = b.useCallback(
    (h) => {
      var f;
      if (c) {
        const u = aa(h) ? h(e) : h;
        u !== e && ((f = s.current) == null || f.call(s, u));
      } else
        o(h);
    },
    [c, e, o, s]
  );
  return [d, p];
}
Dt(et, "useControllableState");
function ia({
  defaultProp: e,
  onChange: t
}) {
  const [n, i] = b.useState(e), a = b.useRef(n), o = b.useRef(t);
  return qs(() => {
    o.current = t;
  }, [t]), b.useEffect(() => {
    var s;
    a.current !== n && ((s = o.current) == null || s.call(o, n), a.current = n);
  }, [n, a]), [n, i, o];
}
Dt(ia, "useUncontrolledState");
function aa(e) {
  return typeof e == "function";
}
Dt(aa, "isFunction");
var ri = Symbol("RADIX:SYNC_STATE");
function Ys(e, t, n, i) {
  const { prop: a, defaultProp: o, onChange: s, caller: c } = t, d = a !== void 0, p = ra(s), h = [{ ...n, state: o }];
  i && h.push(i);
  const [f, u] = b.useReducer(
    (y, w) => {
      if (w.type === ri)
        return { ...y, state: w.state };
      const x = e(y, w);
      return d && !Object.is(x.state, y.state) && p(x.state), x;
    },
    ...h
  ), g = f.state, m = b.useRef(g);
  b.useEffect(() => {
    m.current !== g && (m.current = g, d || p(g));
  }, [g, m, d]);
  const v = b.useMemo(() => a !== void 0 ? { ...f, state: a } : f, [f, a]);
  return b.useEffect(() => {
    d && !Object.is(a, f.state) && u({ type: ri, state: a });
  }, [a, f.state, d]), [v, u];
}
Dt(Ys, "useControllableStateReducer");
var Xs = Object.defineProperty, we = (e, t) => Xs(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function Ve(e) {
  const t = b.forwardRef((n, i) => {
    let { children: a, ...o } = n, s = null, c = !1;
    const d = [];
    jn(a) && typeof Ot == "function" && (a = Ot(a._payload)), b.Children.forEach(a, (u) => {
      var g;
      if (la(u)) {
        c = !0;
        const m = u;
        let v = "child" in m.props ? m.props.child : m.props.children;
        jn(v) && typeof Ot == "function" && (v = Ot(v._payload)), s = Js(m, v), d.push((g = s == null ? void 0 : s.props) == null ? void 0 : g.children);
      } else
        d.push(u);
    }), s ? s = b.cloneElement(s, void 0, d) : (
      // A `Slottable` was found but it didn't resolve to a single element (e.g.
      // it wrapped multiple elements, text, or a render-prop `child` that
      // wasn't an element). Don't fall back to treating the `Slottable` wrapper
      // itself as the slot target — throw a descriptive error below instead.
      !c && b.Children.count(a) === 1 && b.isValidElement(a) && (s = a)
    );
    const p = s ? ca(s) : void 0, h = ee(i, p);
    if (!s) {
      if (a || a === 0)
        throw new Error(
          c ? tc(e) : ec(e)
        );
      return a;
    }
    const f = sa(o, s.props ?? {});
    return s.type !== b.Fragment && (f.ref = i ? h : p), b.cloneElement(s, f);
  });
  return t.displayName = `${e}.Slot`, t;
}
we(Ve, "createSlot");
var oa = Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function Zs(e) {
  const t = /* @__PURE__ */ we((n) => "child" in n ? n.children(n.child) : n.children, "Slottable");
  return t.displayName = `${e}.Slottable`, t.__radixId = oa, t;
}
we(Zs, "createSlottable");
var Js = /* @__PURE__ */ we((e, t) => {
  if ("child" in e.props) {
    const n = e.props.child;
    return b.isValidElement(n) ? b.cloneElement(n, void 0, e.props.children(n.props.children)) : null;
  }
  return b.isValidElement(t) ? t : null;
}, "getSlottableElementFromSlottable");
function sa(e, t) {
  const n = { ...t };
  for (const i in t) {
    const a = e[i], o = t[i];
    /^on[A-Z]/.test(i) ? a && o ? n[i] = (...c) => {
      const d = o(...c);
      return a(...c), d;
    } : a && (n[i] = a) : i === "style" ? n[i] = { ...a, ...o } : i === "className" && (n[i] = [a, o].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
we(sa, "mergeProps");
function ca(e) {
  var i, a;
  let t = (i = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (a = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : a.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
we(ca, "getElementRef");
function la(e) {
  return b.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === oa;
}
we(la, "isSlottable");
var Qs = Symbol.for("react.lazy");
function jn(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === Qs && "_payload" in e && da(e._payload);
}
we(jn, "isLazyComponent");
function da(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
we(da, "isPromiseLike");
var ec = /* @__PURE__ */ we((e) => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"), tc = /* @__PURE__ */ we((e) => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"), Ot = b[" use ".trim().toString()], nc = Object.defineProperty, rc = (e, t) => nc(e, "name", { value: t, configurable: !0 }), ic = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], le = ic.reduce((e, t) => {
  const n = /* @__PURE__ */ Ve(`Primitive.${t}`), i = b.forwardRef((a, o) => {
    const { asChild: s, ...c } = a, d = s ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ r(d, { ...c, ref: o });
  });
  return i.displayName = `Primitive.${t}`, { ...e, [t]: i };
}, {});
function ur(e, t) {
  e && rr.flushSync(() => e.dispatchEvent(t));
}
rc(ur, "dispatchDiscreteCustomEvent");
var ac = Object.defineProperty, ie = (e, t) => ac(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function hr(e) {
  const t = e + "CollectionProvider", [n, i] = /* @__PURE__ */ Le(t), [a, o] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), s = /* @__PURE__ */ ie((v) => {
    const { scope: y, children: w } = v, x = b.useRef(null), k = b.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ r(a, { scope: y, itemMap: k, collectionRef: x, children: w });
  }, "CollectionProvider");
  s.displayName = t;
  const c = e + "CollectionSlot", d = /* @__PURE__ */ Ve(c), p = b.forwardRef(
    (v, y) => {
      const { scope: w, children: x } = v, k = o(c, w), M = ee(y, k.collectionRef);
      return /* @__PURE__ */ r(d, { ref: M, children: x });
    }
  );
  p.displayName = c;
  const h = e + "CollectionItemSlot", f = "data-radix-collection-item", u = /* @__PURE__ */ Ve(h), g = b.forwardRef(
    (v, y) => {
      const { scope: w, children: x, ...k } = v, M = b.useRef(null), P = ee(y, M), S = o(h, w);
      return b.useEffect(() => (S.itemMap.set(M, { ref: M, ...k }), () => void S.itemMap.delete(M))), /* @__PURE__ */ r(u, { [f]: "", ref: P, children: x });
    }
  );
  g.displayName = h;
  function m(v) {
    const y = o(e + "CollectionConsumer", v);
    return b.useCallback(() => {
      const x = y.collectionRef.current;
      if (!x) return [];
      const k = Array.from(x.querySelectorAll(`[${f}]`));
      return Array.from(y.itemMap.values()).sort(
        (S, D) => k.indexOf(S.ref.current) - k.indexOf(D.ref.current)
      );
    }, [y.collectionRef, y.itemMap]);
  }
  return ie(m, "useCollection"), [
    { Provider: s, Slot: p, ItemSlot: g },
    m,
    i
  ];
}
ie(hr, "createCollection");
var ii = /* @__PURE__ */ new WeakMap(), Q, de, kn = (de = class extends Map {
  constructor(n) {
    super(n);
    qr(this, Q);
    xn(this, Q, [...super.keys()]), ii.set(this, !0);
  }
  set(n, i) {
    return ii.get(this) && (this.has(n) ? ae(this, Q)[ae(this, Q).indexOf(n)] = n : ae(this, Q).push(n)), super.set(n, i), this;
  }
  insert(n, i, a) {
    const o = this.has(i), s = ae(this, Q).length, c = fr(n);
    let d = c >= 0 ? c : s + c;
    const p = d < 0 || d >= s ? -1 : d;
    if (p === this.size || o && p === this.size - 1 || p === -1)
      return this.set(i, a), this;
    const h = this.size + (o ? 0 : 1);
    c < 0 && d++;
    const f = [...ae(this, Q)];
    let u, g = !1;
    for (let m = d; m < h; m++)
      if (d === m) {
        let v = f[m];
        f[m] === i && (v = f[m + 1]), o && this.delete(i), u = this.get(v), this.set(i, a);
      } else {
        !g && f[m - 1] === i && (g = !0);
        const v = f[g ? m : m - 1], y = u;
        u = this.get(v), this.delete(v), this.set(v, y);
      }
    return this;
  }
  with(n, i, a) {
    const o = new de(this);
    return o.insert(n, i, a), o;
  }
  before(n) {
    const i = ae(this, Q).indexOf(n) - 1;
    if (!(i < 0))
      return this.entryAt(i);
  }
  /**
   * Sets a new key-value pair at the position before the given key.
   */
  setBefore(n, i, a) {
    const o = ae(this, Q).indexOf(n);
    return o === -1 ? this : this.insert(o, i, a);
  }
  after(n) {
    let i = ae(this, Q).indexOf(n);
    if (i = i === -1 || i === this.size - 1 ? -1 : i + 1, i !== -1)
      return this.entryAt(i);
  }
  /**
   * Sets a new key-value pair at the position after the given key.
   */
  setAfter(n, i, a) {
    const o = ae(this, Q).indexOf(n);
    return o === -1 ? this : this.insert(o + 1, i, a);
  }
  first() {
    return this.entryAt(0);
  }
  last() {
    return this.entryAt(-1);
  }
  clear() {
    return xn(this, Q, []), super.clear();
  }
  delete(n) {
    const i = super.delete(n);
    return i && ae(this, Q).splice(ae(this, Q).indexOf(n), 1), i;
  }
  deleteAt(n) {
    const i = this.keyAt(n);
    return i !== void 0 ? this.delete(i) : !1;
  }
  at(n) {
    const i = Wt(ae(this, Q), n);
    if (i !== void 0)
      return this.get(i);
  }
  entryAt(n) {
    const i = Wt(ae(this, Q), n);
    if (i !== void 0)
      return [i, this.get(i)];
  }
  indexOf(n) {
    return ae(this, Q).indexOf(n);
  }
  keyAt(n) {
    return Wt(ae(this, Q), n);
  }
  from(n, i) {
    const a = this.indexOf(n);
    if (a === -1)
      return;
    let o = a + i;
    return o < 0 && (o = 0), o >= this.size && (o = this.size - 1), this.at(o);
  }
  keyFrom(n, i) {
    const a = this.indexOf(n);
    if (a === -1)
      return;
    let o = a + i;
    return o < 0 && (o = 0), o >= this.size && (o = this.size - 1), this.keyAt(o);
  }
  find(n, i) {
    let a = 0;
    for (const o of this) {
      if (Reflect.apply(n, i, [o, a, this]))
        return o;
      a++;
    }
  }
  findIndex(n, i) {
    let a = 0;
    for (const o of this) {
      if (Reflect.apply(n, i, [o, a, this]))
        return a;
      a++;
    }
    return -1;
  }
  filter(n, i) {
    const a = [];
    let o = 0;
    for (const s of this)
      Reflect.apply(n, i, [s, o, this]) && a.push(s), o++;
    return new de(a);
  }
  map(n, i) {
    const a = [];
    let o = 0;
    for (const s of this)
      a.push([s[0], Reflect.apply(n, i, [s, o, this])]), o++;
    return new de(a);
  }
  reduce(...n) {
    const [i, a] = n;
    let o = 0, s = a ?? this.at(0);
    for (const c of this)
      o === 0 && n.length === 1 ? s = c : s = Reflect.apply(i, this, [s, c, o, this]), o++;
    return s;
  }
  reduceRight(...n) {
    const [i, a] = n;
    let o = a ?? this.at(-1);
    for (let s = this.size - 1; s >= 0; s--) {
      const c = this.at(s);
      s === this.size - 1 && n.length === 1 ? o = c : o = Reflect.apply(i, this, [o, c, s, this]);
    }
    return o;
  }
  toSorted(n) {
    const i = [...this.entries()].sort(n);
    return new de(i);
  }
  toReversed() {
    const n = new de();
    for (let i = this.size - 1; i >= 0; i--) {
      const a = this.keyAt(i), o = this.get(a);
      n.set(a, o);
    }
    return n;
  }
  toSpliced(...n) {
    const i = [...this.entries()];
    return i.splice(...n), new de(i);
  }
  slice(n, i) {
    const a = new de();
    let o = this.size - 1;
    if (n === void 0)
      return a;
    n < 0 && (n = n + this.size), i !== void 0 && i > 0 && (o = i - 1);
    for (let s = n; s <= o; s++) {
      const c = this.keyAt(s), d = this.get(c);
      a.set(c, d);
    }
    return a;
  }
  every(n, i) {
    let a = 0;
    for (const o of this) {
      if (!Reflect.apply(n, i, [o, a, this]))
        return !1;
      a++;
    }
    return !0;
  }
  some(n, i) {
    let a = 0;
    for (const o of this) {
      if (Reflect.apply(n, i, [o, a, this]))
        return !0;
      a++;
    }
    return !1;
  }
}, Q = new WeakMap(), ie(de, "OrderedDict"), de);
function Wt(e, t) {
  if ("at" in Array.prototype)
    return Array.prototype.at.call(e, t);
  const n = ua(e, t);
  return n === -1 ? void 0 : e[n];
}
ie(Wt, "at");
function ua(e, t) {
  const n = e.length, i = fr(t), a = i >= 0 ? i : n + i;
  return a < 0 || a >= n ? -1 : a;
}
ie(ua, "toSafeIndex");
function fr(e) {
  return e !== e || e === 0 ? 0 : Math.trunc(e);
}
ie(fr, "toSafeInteger");
// @__NO_SIDE_EFFECTS__
function oc(e) {
  const t = e + "CollectionProvider", [n, i] = /* @__PURE__ */ Le(t), [a, o] = n(
    t,
    {
      collectionElement: null,
      collectionRef: { current: null },
      collectionRefObject: { current: null },
      itemMap: new kn(),
      setItemMap: /* @__PURE__ */ ie(() => {
      }, "setItemMap")
    }
  ), s = /* @__PURE__ */ ie(({ state: k, ...M }) => k ? /* @__PURE__ */ r(d, { ...M, state: k }) : /* @__PURE__ */ r(c, { ...M }), "CollectionProvider");
  s.displayName = t;
  const c = /* @__PURE__ */ ie((k) => {
    const M = y();
    return /* @__PURE__ */ r(d, { ...k, state: M });
  }, "CollectionInit");
  c.displayName = t + "Init";
  const d = /* @__PURE__ */ ie((k) => {
    const { scope: M, children: P, state: S } = k, D = b.useRef(null), [E, T] = b.useState(
      null
    ), R = ee(D, T), [O, L] = S;
    return b.useEffect(() => {
      if (!E) return;
      const N = pa(() => {
      });
      return N.observe(E, {
        childList: !0,
        subtree: !0
      }), () => {
        N.disconnect();
      };
    }, [E]), /* @__PURE__ */ r(
      a,
      {
        scope: M,
        itemMap: O,
        setItemMap: L,
        collectionRef: R,
        collectionRefObject: D,
        collectionElement: E,
        children: P
      }
    );
  }, "CollectionProviderImpl");
  d.displayName = t + "Impl";
  const p = e + "CollectionSlot", h = /* @__PURE__ */ Ve(p), f = b.forwardRef(
    (k, M) => {
      const { scope: P, children: S } = k, D = o(p, P), E = ee(M, D.collectionRef);
      return /* @__PURE__ */ r(h, { ref: E, children: S });
    }
  );
  f.displayName = p;
  const u = e + "CollectionItemSlot", g = "data-radix-collection-item", m = /* @__PURE__ */ Ve(u), v = b.forwardRef(
    (k, M) => {
      const { scope: P, children: S, ...D } = k, E = b.useRef(null), [T, R] = b.useState(null), O = ee(M, E, R), L = o(u, P), { setItemMap: N } = L, _ = b.useRef(D);
      ha(_.current, D) || (_.current = D);
      const j = _.current;
      return b.useEffect(() => {
        const G = j;
        return N((C) => T ? C.has(T) ? C.set(T, { ...G, element: T }).toSorted(Vn) : (C.set(T, { ...G, element: T }), C.toSorted(Vn)) : C), () => {
          N((C) => !T || !C.has(T) ? C : (C.delete(T), new kn(C)));
        };
      }, [T, j, N]), /* @__PURE__ */ r(m, { [g]: "", ref: O, children: S });
    }
  );
  v.displayName = u;
  function y() {
    return b.useState(new kn());
  }
  ie(y, "useInitCollection");
  function w(k) {
    const { itemMap: M } = o(e + "CollectionConsumer", k);
    return M;
  }
  return ie(w, "useCollection"), [
    { Provider: s, Slot: f, ItemSlot: v },
    {
      createCollectionScope: i,
      useCollection: w,
      useInitCollection: y
    }
  ];
}
ie(oc, "createCollection");
function ha(e, t) {
  if (e === t) return !0;
  if (typeof e != "object" || typeof t != "object" || e == null || t == null) return !1;
  const n = Object.keys(e), i = Object.keys(t);
  if (n.length !== i.length) return !1;
  for (const a of n)
    if (!Object.prototype.hasOwnProperty.call(t, a) || e[a] !== t[a]) return !1;
  return !0;
}
ie(ha, "shallowEqual");
function fa(e, t) {
  return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING);
}
ie(fa, "isElementPreceding");
function Vn(e, t) {
  return !e[1].element || !t[1].element ? 0 : fa(e[1].element, t[1].element) ? -1 : 1;
}
ie(Vn, "sortByDocumentPosition");
function pa(e) {
  return new MutationObserver((n) => {
    for (const i of n)
      if (i.type === "childList") {
        e();
        return;
      }
  });
}
ie(pa, "getChildListObserver");
var sc = Object.defineProperty, cc = (e, t) => sc(e, "name", { value: t, configurable: !0 }), lc = b.createContext(void 0);
function an(e) {
  const t = b.useContext(lc);
  return e || t || "ltr";
}
cc(an, "useDirection");
var dc = Object.defineProperty, uc = (e, t) => dc(e, "name", { value: t, configurable: !0 });
function Ie(e) {
  const t = b.useRef(e);
  return b.useEffect(() => {
    t.current = e;
  }), b.useMemo(() => ((...n) => {
    var i;
    return (i = t.current) == null ? void 0 : i.call(t, ...n);
  }), []);
}
uc(Ie, "useCallbackRef");
var hc = Object.defineProperty, ne = (e, t) => hc(e, "name", { value: t, configurable: !0 }), Wn = "dismissableLayer.update", fc = "dismissableLayer.pointerDownOutside", pc = "dismissableLayer.focusOutside", ai, ma = b.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set(),
  // Outside elements that belong to a layer's own dismiss affordance (eg, a
  // dialog overlay). Pressing them should dismiss the layer regardless of
  // whether or not they stop propagation.
  //
  // See https://github.com/radix-ui/primitives/issues/3346
  dismissableSurfaces: /* @__PURE__ */ new Set()
}), va = /* @__PURE__ */ b.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ne(function(t, n) {
    const {
      disableOutsidePointerEvents: i = !1,
      deferPointerDownOutside: a = !1,
      onEscapeKeyDown: o,
      onPointerDownOutside: s,
      onFocusOutside: c,
      onInteractOutside: d,
      onDismiss: p,
      ...h
    } = t, f = b.useContext(ma), [u, g] = b.useState(null), m = (u == null ? void 0 : u.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, v] = b.useState({}), y = ee(n, g), w = Array.from(f.layers), [x] = [
      ...f.layersWithOutsidePointerEventsDisabled
    ].slice(-1), k = x ? w.indexOf(x) : -1, M = u ? w.indexOf(u) : -1, P = f.layersWithOutsidePointerEventsDisabled.size > 0, S = M >= k, D = b.useRef(!1), E = ga(
      (L) => {
        s == null || s(L), d == null || d(L), L.defaultPrevented || p == null || p();
      },
      {
        ownerDocument: m,
        deferPointerDownOutside: a,
        isDeferredPointerDownOutsideRef: D,
        dismissableSurfaces: f.dismissableSurfaces,
        shouldHandlePointerDownOutside: b.useCallback(
          (L) => {
            if (!(L instanceof Node))
              return !1;
            const N = [...f.branches].some(
              (_) => _.contains(L)
            );
            return S && !N;
          },
          [f.branches, S]
        )
      }
    ), T = ba((L) => {
      if (a && D.current)
        return;
      const N = L.target;
      [...f.branches].some((j) => j.contains(N)) || (c == null || c(L), d == null || d(L), L.defaultPrevented || p == null || p());
    }, m), R = u ? M === w.length - 1 : !1, O = Ie((L) => {
      L.key === "Escape" && (o == null || o(L), !L.defaultPrevented && p && (L.preventDefault(), p()));
    });
    return b.useEffect(() => {
      if (R)
        return m.addEventListener("keydown", O, { capture: !0 }), () => m.removeEventListener("keydown", O, { capture: !0 });
    }, [m, R, O]), b.useEffect(() => {
      if (u)
        return i && (f.layersWithOutsidePointerEventsDisabled.size === 0 && (ai = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), f.layersWithOutsidePointerEventsDisabled.add(u)), f.layers.add(u), Hn(), () => {
          i && (f.layersWithOutsidePointerEventsDisabled.delete(u), f.layersWithOutsidePointerEventsDisabled.size === 0 && (m.body.style.pointerEvents = ai));
        };
    }, [u, m, i, f]), b.useEffect(() => () => {
      u && (f.layers.delete(u), f.layersWithOutsidePointerEventsDisabled.delete(u), Hn());
    }, [u, f]), b.useEffect(() => {
      const L = /* @__PURE__ */ ne(() => v({}), "handleUpdate");
      return document.addEventListener(Wn, L), () => document.removeEventListener(Wn, L);
    }, []), /* @__PURE__ */ r(
      le.div,
      {
        ...h,
        ref: y,
        style: {
          pointerEvents: P ? S ? "auto" : "none" : void 0,
          ...t.style
        },
        onFocusCapture: Y(t.onFocusCapture, T.onFocusCapture),
        onBlurCapture: Y(t.onBlurCapture, T.onBlurCapture),
        onPointerDownCapture: Y(
          t.onPointerDownCapture,
          E.onPointerDownCapture
        )
      }
    );
  }, "DismissableLayer")
);
function mc() {
  const e = b.useContext(ma), [t, n] = b.useState(null);
  return b.useEffect(() => {
    if (t)
      return e.dismissableSurfaces.add(t), () => {
        e.dismissableSurfaces.delete(t);
      };
  }, [t, e.dismissableSurfaces]), n;
}
ne(mc, "useDismissableLayerSurface");
var vc = /* @__PURE__ */ ne(() => !0, "IS_TRUE");
function ga(e, t) {
  const {
    ownerDocument: n = globalThis == null ? void 0 : globalThis.document,
    deferPointerDownOutside: i = !1,
    isDeferredPointerDownOutsideRef: a,
    dismissableSurfaces: o,
    shouldHandlePointerDownOutside: s = vc
  } = t, c = Ie(e), d = b.useRef(!1), p = b.useRef(!1), h = b.useRef(/* @__PURE__ */ new Map()), f = b.useRef(() => {
  });
  return b.useEffect(() => {
    function u() {
      p.current = !1, a.current = !1, h.current.clear();
    }
    ne(u, "resetOutsideInteraction");
    function g() {
      return Array.from(h.current.values()).some(Boolean);
    }
    ne(g, "isOutsideInteractionIntercepted");
    function m(k) {
      if (!p.current)
        return;
      const M = k.target;
      M instanceof Node && [...o].some((S) => S.contains(M)) || h.current.set(k.type, !0), k.type === "click" && window.setTimeout(() => {
        p.current && f.current();
      }, 0);
    }
    ne(m, "handleInteractionCapture");
    function v(k) {
      p.current && h.current.set(k.type, !1);
    }
    ne(v, "handleInteractionBubble");
    const y = /* @__PURE__ */ ne((k) => {
      if (k.target && !d.current) {
        let M = function() {
          n.removeEventListener("click", f.current);
          const S = g();
          u(), S || pr(
            fc,
            c,
            P,
            { discrete: !0 }
          );
        };
        if (ne(M, "handleAndDispatchPointerDownOutsideEvent"), !s(k.target)) {
          n.removeEventListener("click", f.current), u(), d.current = !1;
          return;
        }
        const P = { originalEvent: k };
        p.current = !0, a.current = i && k.button === 0, h.current.clear(), !i || k.button !== 0 ? M() : (n.removeEventListener("click", f.current), f.current = M, n.addEventListener("click", f.current, { once: !0 }));
      } else
        n.removeEventListener("click", f.current), u();
      d.current = !1;
    }, "handlePointerDown"), w = [
      "pointerup",
      "mousedown",
      "mouseup",
      "touchstart",
      "touchend",
      "click"
    ];
    for (const k of w)
      n.addEventListener(k, m, !0), n.addEventListener(k, v);
    const x = window.setTimeout(() => {
      n.addEventListener("pointerdown", y);
    }, 0);
    return () => {
      window.clearTimeout(x), n.removeEventListener("pointerdown", y), n.removeEventListener("click", f.current);
      for (const k of w)
        n.removeEventListener(k, m, !0), n.removeEventListener(k, v);
    };
  }, [
    n,
    c,
    i,
    a,
    o,
    s
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: /* @__PURE__ */ ne(() => d.current = !0, "onPointerDownCapture")
  };
}
ne(ga, "usePointerDownOutside");
function ba(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ie(e), i = b.useRef(!1);
  return b.useEffect(() => {
    const a = /* @__PURE__ */ ne((o) => {
      o.target && !i.current && pr(pc, n, { originalEvent: o }, {
        discrete: !1
      });
    }, "handleFocus");
    return t.addEventListener("focusin", a), () => t.removeEventListener("focusin", a);
  }, [t, n]), {
    onFocusCapture: /* @__PURE__ */ ne(() => i.current = !0, "onFocusCapture"),
    onBlurCapture: /* @__PURE__ */ ne(() => i.current = !1, "onBlurCapture")
  };
}
ne(ba, "useFocusOutside");
function Hn() {
  const e = new CustomEvent(Wn);
  document.dispatchEvent(e);
}
ne(Hn, "dispatchUpdate");
function pr(e, t, n, { discrete: i }) {
  const a = n.originalEvent.target, o = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && a.addEventListener(e, t, { once: !0 }), i ? ur(a, o) : a.dispatchEvent(o);
}
ne(pr, "handleAndDispatchCustomEvent");
var gc = Object.defineProperty, mr = (e, t) => gc(e, "name", { value: t, configurable: !0 }), Lt = 0, ke = null;
function bc(e) {
  return on(), e.children;
}
mr(bc, "FocusGuards");
function on() {
  b.useEffect(() => {
    ke || (ke = { start: Gn(), end: Gn() });
    const { start: e, end: t } = ke;
    return document.body.firstElementChild !== e && document.body.insertAdjacentElement("afterbegin", e), document.body.lastElementChild !== t && document.body.insertAdjacentElement("beforeend", t), Lt++, () => {
      Lt === 1 && (ke == null || ke.start.remove(), ke == null || ke.end.remove(), ke = null), Lt = Math.max(0, Lt - 1);
    };
  }, []);
}
mr(on, "useFocusGuards");
function Gn() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
mr(Gn, "createFocusGuard");
var yc = Object.defineProperty, oe = (e, t) => yc(e, "name", { value: t, configurable: !0 }), Cn = "focusScope.autoFocusOnMount", Mn = "focusScope.autoFocusOnUnmount", oi = { bubbles: !1, cancelable: !0 }, ya = /* @__PURE__ */ b.forwardRef(
  /* @__PURE__ */ oe(function(t, n) {
    const {
      loop: i = !1,
      trapped: a = !1,
      onMountAutoFocus: o,
      onUnmountAutoFocus: s,
      ...c
    } = t, [d, p] = b.useState(null), h = Ie(o), f = Ie(s), u = b.useRef(null), g = ee(n, p), m = b.useRef({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }).current;
    b.useEffect(() => {
      if (a) {
        let y = function(M) {
          if (m.paused || !d) return;
          const P = M.target;
          d.contains(P) ? u.current = P : Re(u.current, { select: !0 });
        }, w = function(M) {
          if (m.paused || !d) return;
          const P = M.relatedTarget;
          P !== null && (d.contains(P) || Re(u.current, { select: !0 }));
        }, x = function(M) {
          if (document.activeElement === document.body)
            for (const S of M)
              S.removedNodes.length > 0 && Re(d);
        };
        oe(y, "handleFocusIn"), oe(w, "handleFocusOut"), oe(x, "handleMutations"), document.addEventListener("focusin", y), document.addEventListener("focusout", w);
        const k = new MutationObserver(x);
        return d && k.observe(d, { childList: !0, subtree: !0 }), () => {
          document.removeEventListener("focusin", y), document.removeEventListener("focusout", w), k.disconnect();
        };
      }
    }, [a, d, m.paused]), b.useEffect(() => {
      if (d) {
        si.add(m);
        const y = document.activeElement;
        if (!d.contains(y)) {
          const x = new CustomEvent(Cn, oi);
          d.addEventListener(Cn, h), d.dispatchEvent(x), x.defaultPrevented || (wa(Na(vr(d)), { select: !0 }), document.activeElement === y && Re(d));
        }
        return () => {
          d.removeEventListener(Cn, h), setTimeout(() => {
            const x = new CustomEvent(Mn, oi);
            d.addEventListener(Mn, f), d.dispatchEvent(x), x.defaultPrevented || Re(y ?? document.body, { select: !0 }), d.removeEventListener(Mn, f), si.remove(m);
          }, 0);
        };
      }
    }, [d, h, f, m]);
    const v = b.useCallback(
      (y) => {
        if (!i && !a || m.paused) return;
        const w = y.key === "Tab" && !y.altKey && !y.ctrlKey && !y.metaKey, x = document.activeElement;
        if (w && x) {
          const k = y.currentTarget, [M, P] = xa(k);
          M && P ? !y.shiftKey && x === P ? (y.preventDefault(), i && Re(M, { select: !0 })) : y.shiftKey && x === M && (y.preventDefault(), i && Re(P, { select: !0 })) : x === k && y.preventDefault();
        }
      },
      [i, a, m.paused]
    );
    return /* @__PURE__ */ r(le.div, { tabIndex: -1, ...c, ref: g, onKeyDown: v });
  }, "FocusScope")
);
function wa(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const i of e)
    if (Re(i, { select: t }), document.activeElement !== n) return;
}
oe(wa, "focusFirst");
function xa(e) {
  const t = vr(e), n = Un(t, e), i = Un(t.reverse(), e);
  return [n, i];
}
oe(xa, "getTabbableEdges");
function vr(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: /* @__PURE__ */ oe((i) => {
      const a = i.tagName === "INPUT" && i.type === "hidden";
      return i.disabled || i.hidden || a ? NodeFilter.FILTER_SKIP : i.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }, "acceptNode")
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
oe(vr, "getTabbableCandidates");
function Un(e, t) {
  const n = typeof t.checkVisibility == "function" && t.checkVisibility({ checkVisibilityCSS: !0 });
  for (const i of e)
    if (!(n ? !i.checkVisibility({ checkVisibilityCSS: !0 }) : ka(i, { upTo: t })))
      return i;
}
oe(Un, "findVisible");
function ka(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
oe(ka, "isHidden");
function Ca(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
oe(Ca, "isSelectableInput");
function Re(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Ca(e) && t && e.select();
  }
}
oe(Re, "focus");
var si = Ma();
function Ma() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Kn(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Kn(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
oe(Ma, "createFocusScopesStack");
function Kn(e, t) {
  const n = [...e], i = n.indexOf(t);
  return i !== -1 && n.splice(i, 1), n;
}
oe(Kn, "arrayRemove");
function Na(e) {
  return e.filter((t) => t.tagName !== "A");
}
oe(Na, "removeLinks");
var wc = Object.defineProperty, xc = (e, t) => wc(e, "name", { value: t, configurable: !0 }), kc = b[" useId ".trim().toString()] || (() => {
}), Cc = 0;
function Nt(e) {
  const [t, n] = b.useState(kc());
  return ye(() => {
    e || n((i) => i ?? String(Cc++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
xc(Nt, "useId");
const Mc = ["top", "right", "bottom", "left"], We = Math.min, Ae = Math.max, Yt = Math.round, _t = Math.floor, $e = (e) => ({
  x: e,
  y: e
}), Nc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Sa(e, t, n) {
  return Ae(e, We(t, n));
}
function Te(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function He(e) {
  return e.split("-")[0];
}
function gt(e) {
  return e.split("-")[1];
}
function gr(e) {
  return e === "x" ? "y" : "x";
}
function br(e) {
  return e === "y" ? "height" : "width";
}
function Me(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function yr(e) {
  return gr(Me(e));
}
function Sc(e, t, n) {
  n === void 0 && (n = !1);
  const i = gt(e), a = yr(e), o = br(a);
  let s = a === "x" ? i === (n ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (s = Xt(s)), [s, Xt(s)];
}
function Pc(e) {
  const t = Xt(e);
  return [qn(e), t, qn(t)];
}
function qn(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const ci = ["left", "right"], li = ["right", "left"], Ec = ["top", "bottom"], Rc = ["bottom", "top"];
function Ac(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? li : ci : t ? ci : li;
    case "left":
    case "right":
      return t ? Ec : Rc;
    default:
      return [];
  }
}
function $c(e, t, n, i) {
  const a = gt(e);
  let o = Ac(He(e), n === "start", i);
  return a && (o = o.map((s) => s + "-" + a), t && (o = o.concat(o.map(qn)))), o;
}
function Xt(e) {
  const t = He(e);
  return Nc[t] + e.slice(t.length);
}
function Dc(e) {
  var t, n, i, a;
  return {
    top: (t = e.top) != null ? t : 0,
    right: (n = e.right) != null ? n : 0,
    bottom: (i = e.bottom) != null ? i : 0,
    left: (a = e.left) != null ? a : 0
  };
}
function Pa(e) {
  return typeof e != "number" ? Dc(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Zt(e) {
  const {
    x: t,
    y: n,
    width: i,
    height: a
  } = e;
  return {
    width: i,
    height: a,
    top: n,
    left: t,
    right: t + i,
    bottom: n + a,
    x: t,
    y: n
  };
}
function di(e, t, n) {
  let {
    reference: i,
    floating: a
  } = e;
  const o = Me(t), s = yr(t), c = br(s), d = He(t), p = o === "y", h = i.x + i.width / 2 - a.width / 2, f = i.y + i.height / 2 - a.height / 2, u = i[c] / 2 - a[c] / 2;
  let g;
  switch (d) {
    case "top":
      g = {
        x: h,
        y: i.y - a.height
      };
      break;
    case "bottom":
      g = {
        x: h,
        y: i.y + i.height
      };
      break;
    case "right":
      g = {
        x: i.x + i.width,
        y: f
      };
      break;
    case "left":
      g = {
        x: i.x - a.width,
        y: f
      };
      break;
    default:
      g = {
        x: i.x,
        y: i.y
      };
  }
  const m = gt(t);
  return m && (g[s] += u * (m === "end" ? 1 : -1) * (n && p ? -1 : 1)), g;
}
async function Ic(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: i,
    y: a,
    platform: o,
    rects: s,
    elements: c,
    strategy: d
  } = e, {
    boundary: p = "clippingAncestors",
    rootBoundary: h = "viewport",
    elementContext: f = "floating",
    altBoundary: u = !1,
    padding: g = 0
  } = Te(t, e), m = Pa(g), y = c[u ? f === "floating" ? "reference" : "floating" : f], w = Zt(await o.getClippingRect({
    element: (n = await (o.isElement == null ? void 0 : o.isElement(y))) == null || n ? y : y.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(c.floating)),
    boundary: p,
    rootBoundary: h,
    strategy: d
  })), x = f === "floating" ? {
    x: i,
    y: a,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, k = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(c.floating)), M = await (o.isElement == null ? void 0 : o.isElement(k)) && await (o.getScale == null ? void 0 : o.getScale(k)) || {
    x: 1,
    y: 1
  }, P = Zt(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: x,
    offsetParent: k,
    strategy: d
  }) : x);
  return {
    top: (w.top - P.top + m.top) / M.y,
    bottom: (P.bottom - w.bottom + m.bottom) / M.y,
    left: (w.left - P.left + m.left) / M.x,
    right: (P.right - w.right + m.right) / M.x
  };
}
const Tc = 50, Oc = async (e, t, n) => {
  const {
    placement: i = "bottom",
    strategy: a = "absolute",
    middleware: o = [],
    platform: s
  } = n, c = s.detectOverflow ? s : {
    ...s,
    detectOverflow: Ic
  }, d = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let p = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: h,
    y: f
  } = di(p, i, d), u = i, g = 0;
  const m = {};
  for (let v = 0; v < o.length; v++) {
    const y = o[v];
    if (!y)
      continue;
    const {
      name: w,
      fn: x
    } = y, {
      x: k,
      y: M,
      data: P,
      reset: S
    } = await x({
      x: h,
      y: f,
      initialPlacement: i,
      placement: u,
      strategy: a,
      middlewareData: m,
      rects: p,
      platform: c,
      elements: {
        reference: e,
        floating: t
      }
    });
    h = k ?? h, f = M ?? f, m[w] = {
      ...m[w],
      ...P
    }, S && g < Tc && (g++, typeof S == "object" && (S.placement && (u = S.placement), S.rects && (p = S.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : S.rects), {
      x: h,
      y: f
    } = di(p, u, d)), v = -1);
  }
  return {
    x: h,
    y: f,
    placement: u,
    strategy: a,
    middlewareData: m
  };
}, Lc = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: i,
      placement: a,
      rects: o,
      platform: s,
      elements: c,
      middlewareData: d
    } = t, {
      element: p,
      padding: h = 0
    } = Te(e, t) || {};
    if (p == null)
      return {};
    const f = Pa(h), u = {
      x: n,
      y: i
    }, g = yr(a), m = br(g), v = await s.getDimensions(p), y = g === "y", w = y ? "top" : "left", x = y ? "bottom" : "right", k = y ? "clientHeight" : "clientWidth", M = o.reference[m] + o.reference[g] - u[g] - o.floating[m], P = u[g] - o.reference[g], S = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(p));
    let D = S ? S[k] : 0;
    (!D || !await (s.isElement == null ? void 0 : s.isElement(S))) && (D = c.floating[k] || o.floating[m]);
    const E = M / 2 - P / 2, T = D / 2 - v[m] / 2 - 1, R = We(f[w], T), O = We(f[x], T), L = D - v[m] - O, N = D / 2 - v[m] / 2 + E, _ = Sa(R, N, L), j = !d.arrow && gt(a) != null && N !== _ && o.reference[m] / 2 - (N < R ? R : O) - v[m] / 2 < 0, G = j ? N < R ? N - R : N - L : 0;
    return {
      [g]: u[g] + G,
      data: {
        [g]: _,
        centerOffset: N - _ - G,
        ...j && {
          alignmentOffset: G
        }
      },
      reset: j
    };
  }
}), _c = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, i;
      const {
        placement: a,
        middlewareData: o,
        rects: s,
        initialPlacement: c,
        platform: d,
        elements: p
      } = t, {
        mainAxis: h = !0,
        crossAxis: f = !0,
        fallbackPlacements: u,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: v = !0,
        ...y
      } = Te(e, t);
      if ((n = o.arrow) != null && n.alignmentOffset)
        return {};
      const w = He(a), x = Me(c), k = He(c) === c, M = await (d.isRTL == null ? void 0 : d.isRTL(p.floating)), P = u || (k || !v ? [Xt(c)] : Pc(c)), S = m !== "none";
      !u && S && P.push(...$c(c, v, m, M));
      const D = [c, ...P], E = await d.detectOverflow(t, y), T = [];
      let R = ((i = o.flip) == null ? void 0 : i.overflows) || [];
      if (h && T.push(E[w]), f) {
        const _ = Sc(a, s, M);
        T.push(E[_[0]], E[_[1]]);
      }
      if (R = [...R, {
        placement: a,
        overflows: T
      }], !T.every((_) => _ <= 0)) {
        var O, L;
        const _ = (((O = o.flip) == null ? void 0 : O.index) || 0) + 1, j = D[_];
        if (j && (!(f === "alignment" ? x !== Me(j) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        R.every((I) => Me(I.placement) === x ? I.overflows[0] > 0 : !0)))
          return {
            data: {
              index: _,
              overflows: R
            },
            reset: {
              placement: j
            }
          };
        let G = (L = R.filter((C) => C.overflows[0] <= 0).sort((C, I) => C.overflows[1] - I.overflows[1])[0]) == null ? void 0 : L.placement;
        if (!G)
          switch (g) {
            case "bestFit": {
              var N;
              const C = (N = R.filter((I) => {
                if (S) {
                  const z = Me(I.placement);
                  return z === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  z === "y";
                }
                return !0;
              }).map((I) => [I.placement, I.overflows.filter((z) => z > 0).reduce((z, A) => z + A, 0)]).sort((I, z) => I[1] - z[1])[0]) == null ? void 0 : N[0];
              C && (G = C);
              break;
            }
            case "initialPlacement":
              G = c;
              break;
          }
        if (a !== G)
          return {
            reset: {
              placement: G
            }
          };
      }
      return {};
    }
  };
};
function ui(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function hi(e) {
  return Mc.some((t) => e[t] >= 0);
}
const Fc = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n,
        platform: i
      } = t, {
        strategy: a = "referenceHidden",
        ...o
      } = Te(e, t);
      switch (a) {
        case "referenceHidden": {
          const s = await i.detectOverflow(t, {
            ...o,
            elementContext: "reference"
          }), c = ui(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: c,
              referenceHidden: hi(c)
            }
          };
        }
        case "escaped": {
          const s = await i.detectOverflow(t, {
            ...o,
            altBoundary: !0
          }), c = ui(s, n.floating);
          return {
            data: {
              escapedOffsets: c,
              escaped: hi(c)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Ea = /* @__PURE__ */ new Set(["left", "top"]);
async function zc(e, t) {
  const {
    placement: n,
    platform: i,
    elements: a
  } = e, o = await (i.isRTL == null ? void 0 : i.isRTL(a.floating)), s = He(n), c = gt(n), d = Me(n) === "y", p = Ea.has(s) ? -1 : 1, h = o && d ? -1 : 1, f = Te(t, e);
  let {
    mainAxis: u,
    crossAxis: g,
    alignmentAxis: m
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return c && typeof m == "number" && (g = c === "end" ? m * -1 : m), d ? {
    x: g * h,
    y: u * p
  } : {
    x: u * p,
    y: g * h
  };
}
const Bc = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, i;
      const {
        x: a,
        y: o,
        placement: s,
        middlewareData: c
      } = t, d = await zc(t, e);
      return s === ((n = c.offset) == null ? void 0 : n.placement) && (i = c.arrow) != null && i.alignmentOffset ? {} : {
        x: a + d.x,
        y: o + d.y,
        data: {
          ...d,
          placement: s
        }
      };
    }
  };
}, jc = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: i,
        placement: a,
        platform: o
      } = t, {
        mainAxis: s = !0,
        crossAxis: c = !1,
        limiter: d = {
          fn: (x) => {
            let {
              x: k,
              y: M
            } = x;
            return {
              x: k,
              y: M
            };
          }
        },
        ...p
      } = Te(e, t), h = {
        x: n,
        y: i
      }, f = await o.detectOverflow(t, p), u = Me(a), g = gr(u);
      let m = h[g], v = h[u];
      const y = (x, k) => Sa(k + f[x === "y" ? "top" : "left"], k, k - f[x === "y" ? "bottom" : "right"]);
      s && (m = y(g, m)), c && (v = y(u, v));
      const w = d.fn({
        ...t,
        [g]: m,
        [u]: v
      });
      return {
        ...w,
        data: {
          x: w.x - n,
          y: w.y - i,
          enabled: {
            [g]: s,
            [u]: c
          }
        }
      };
    }
  };
}, Vc = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      var n, i;
      const {
        x: a,
        y: o,
        placement: s,
        rects: c,
        middlewareData: d
      } = t, {
        offset: p = 0,
        mainAxis: h = !0,
        crossAxis: f = !0
      } = Te(e, t), u = {
        x: a,
        y: o
      }, g = Me(s), m = gr(g);
      let v = u[m], y = u[g];
      const w = Te(p, t), x = typeof w == "number" ? {
        mainAxis: w,
        crossAxis: 0
      } : {
        mainAxis: (n = w.mainAxis) != null ? n : 0,
        crossAxis: (i = w.crossAxis) != null ? i : 0
      };
      if (h) {
        const P = m === "y" ? "height" : "width", S = c.reference[m] - c.floating[P] + x.mainAxis, D = c.reference[m] + c.reference[P] - x.mainAxis;
        v < S ? v = S : v > D && (v = D);
      }
      if (f) {
        var k, M;
        const P = m === "y" ? "width" : "height", S = Ea.has(He(s)), D = c.reference[g] - c.floating[P] + (S && ((k = d.offset) == null ? void 0 : k[g]) || 0) + (S ? 0 : x.crossAxis), E = c.reference[g] + c.reference[P] + (S ? 0 : ((M = d.offset) == null ? void 0 : M[g]) || 0) - (S ? x.crossAxis : 0);
        y < D ? y = D : y > E && (y = E);
      }
      return {
        [m]: v,
        [g]: y
      };
    }
  };
}, Wc = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: n,
        rects: i,
        platform: a,
        elements: o
      } = t, {
        apply: s = () => {
        },
        ...c
      } = Te(e, t), d = await a.detectOverflow(t, c), p = He(n), h = gt(n), f = Me(n) === "y", {
        width: u,
        height: g
      } = i.floating;
      let m, v;
      p === "top" || p === "bottom" ? (m = p, v = h === (await (a.isRTL == null ? void 0 : a.isRTL(o.floating)) ? "start" : "end") ? "left" : "right") : (v = p, m = h === "end" ? "top" : "bottom");
      const y = g - d.top - d.bottom, w = u - d.left - d.right, x = We(g - d[m], y), k = We(u - d[v], w), M = t.middlewareData.shift, P = !M;
      let S = x, D = k;
      M != null && M.enabled.x && (D = w), M != null && M.enabled.y && (S = y), P && !h && (f ? D = u - 2 * Ae(d.left, d.right) : S = g - 2 * Ae(d.top, d.bottom)), await s({
        ...t,
        availableWidth: D,
        availableHeight: S
      });
      const E = await a.getDimensions(o.floating);
      return u !== E.width || g !== E.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function sn() {
  return typeof window < "u";
}
function bt(e) {
  return Ra(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function se(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function _e(e) {
  var t;
  return (t = (Ra(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ra(e) {
  return sn() ? e instanceof Node || e instanceof se(e).Node : !1;
}
function Se(e) {
  return sn() ? e instanceof Element || e instanceof se(e).Element : !1;
}
function Ke(e) {
  return sn() ? e instanceof HTMLElement || e instanceof se(e).HTMLElement : !1;
}
function fi(e) {
  return !sn() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof se(e).ShadowRoot;
}
function cn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: i,
    display: a
  } = Pe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + i + n) && a !== "inline" && a !== "contents";
}
function Hc(e) {
  return /^(table|td|th)$/.test(bt(e));
}
function ln(e) {
  try {
    if (e.matches(":popover-open"))
      return !0;
  } catch {
  }
  try {
    return e.matches(":modal");
  } catch {
    return !1;
  }
}
const Gc = /transform|translate|scale|rotate|perspective|filter/, Uc = /paint|layout|strict|content/, Ye = (e) => !!e && e !== "none";
let Nn;
function wr(e) {
  const t = Se(e) ? Pe(e) : e;
  return Ye(t.transform) || Ye(t.translate) || Ye(t.scale) || Ye(t.rotate) || Ye(t.perspective) || !xr() && (Ye(t.backdropFilter) || Ye(t.filter)) || Gc.test(t.willChange || "") || Uc.test(t.contain || "");
}
function Kc(e) {
  let t = Je(e);
  for (; Ke(t) && !St(t); ) {
    if (wr(t))
      return t;
    if (ln(t))
      return null;
    t = Je(t);
  }
  return null;
}
function xr() {
  return Nn == null && (Nn = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), Nn;
}
function St(e) {
  return /^(html|body|#document)$/.test(bt(e));
}
function Pe(e) {
  return se(e).getComputedStyle(e);
}
function dn(e) {
  return Se(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Je(e) {
  if (bt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    fi(e) && e.host || // Fallback.
    _e(e)
  );
  return fi(t) ? t.host : t;
}
function Aa(e) {
  const t = Je(e);
  return St(t) ? (e.ownerDocument || e).body : Ke(t) && cn(t) ? t : Aa(t);
}
function Pt(e, t, n) {
  var i;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const a = Aa(e), o = a === ((i = e.ownerDocument) == null ? void 0 : i.body), s = se(a);
  if (o) {
    const c = Yn(s);
    return t.concat(s, s.visualViewport || [], cn(a) ? a : [], c && n ? Pt(c) : []);
  } else
    return t.concat(a, Pt(a, [], n));
}
function Yn(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function $a(e) {
  const t = Pe(e);
  let n = parseFloat(t.width) || 0, i = parseFloat(t.height) || 0;
  const a = Ke(e), o = a ? e.offsetWidth : n, s = a ? e.offsetHeight : i, c = Yt(n) !== o || Yt(i) !== s;
  return c && (n = o, i = s), {
    width: n,
    height: i,
    $: c
  };
}
function kr(e) {
  return Se(e) ? e : e.contextElement;
}
function dt(e) {
  const t = kr(e);
  if (!Ke(t))
    return $e(1);
  const n = t.getBoundingClientRect(), {
    width: i,
    height: a,
    $: o
  } = $a(t);
  let s = (o ? Yt(n.width) : n.width) / i, c = (o ? Yt(n.height) : n.height) / a;
  return (!s || !Number.isFinite(s)) && (s = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: s,
    y: c
  };
}
const qc = /* @__PURE__ */ $e(0);
function Da(e) {
  const t = se(e);
  return !xr() || !t.visualViewport ? qc : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Yc(e, t, n) {
  return t === void 0 && (t = !1), !!n && t && n === se(e);
}
function Qe(e, t, n, i) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const a = e.getBoundingClientRect(), o = kr(e);
  let s = $e(1);
  t && (i ? Se(i) && (s = dt(i)) : s = dt(e));
  const c = Yc(o, n, i) ? Da(o) : $e(0);
  let d = (a.left + c.x) / s.x, p = (a.top + c.y) / s.y, h = a.width / s.x, f = a.height / s.y;
  if (o && i) {
    const u = se(o), g = Se(i) ? se(i) : i;
    let m = u, v = Yn(m);
    for (; v && g !== m; ) {
      const y = dt(v), w = v.getBoundingClientRect(), x = Pe(v), k = w.left + (v.clientLeft + parseFloat(x.paddingLeft)) * y.x, M = w.top + (v.clientTop + parseFloat(x.paddingTop)) * y.y;
      d *= y.x, p *= y.y, h *= y.x, f *= y.y, d += k, p += M, m = se(v), v = Yn(m);
    }
  }
  return Zt({
    width: h,
    height: f,
    x: d,
    y: p
  });
}
function un(e, t) {
  const n = dn(e).scrollLeft;
  return t ? t.left + n : Qe(_e(e)).left + n;
}
function Ia(e, t) {
  const n = e.getBoundingClientRect(), i = n.left + t.scrollLeft - un(e, n), a = n.top + t.scrollTop;
  return {
    x: i,
    y: a
  };
}
function Xc(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: i,
    strategy: a
  } = e;
  const o = a === "fixed", s = _e(i), c = t ? ln(t.floating) : !1;
  if (i === s || c && o)
    return n;
  let d = {
    scrollLeft: 0,
    scrollTop: 0
  }, p = $e(1);
  const h = $e(0), f = Ke(i);
  if ((f || !o) && ((bt(i) !== "body" || cn(s)) && (d = dn(i)), f)) {
    const g = Qe(i);
    p = dt(i), h.x = g.x + i.clientLeft, h.y = g.y + i.clientTop;
  }
  const u = s && !f && !o ? Ia(s, d) : $e(0);
  return {
    width: n.width * p.x,
    height: n.height * p.y,
    x: n.x * p.x - d.scrollLeft * p.x + h.x + u.x,
    y: n.y * p.y - d.scrollTop * p.y + h.y + u.y
  };
}
function Zc(e) {
  return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function Jc(e) {
  const t = dn(e), n = e.ownerDocument.body, i = Ae(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), a = Ae(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
  let o = -t.scrollLeft + un(e);
  const s = -t.scrollTop;
  return Pe(n).direction === "rtl" && (o += Ae(e.clientWidth, n.clientWidth) - i), {
    width: i,
    height: a,
    x: o,
    y: s
  };
}
const Qc = 25;
function el(e, t, n) {
  n === void 0 && (n = "viewport");
  const i = n === "layoutViewport", a = se(e), o = _e(e), s = a.visualViewport;
  let c = o.clientWidth, d = o.clientHeight, p = 0, h = 0;
  if (s) {
    const u = !xr() || t === "fixed";
    i ? u || (p = -s.offsetLeft, h = -s.offsetTop) : (c = s.width, d = s.height, u && (p = s.offsetLeft, h = s.offsetTop));
  }
  if (un(o) <= 0) {
    const u = o.ownerDocument, g = u.body, m = getComputedStyle(g), v = u.compatMode === "CSS1Compat" && parseFloat(m.marginLeft) + parseFloat(m.marginRight) || 0, y = Math.abs(o.clientWidth - g.clientWidth - v), w = getComputedStyle(o).scrollbarGutter === "stable both-edges" ? y / 2 : y;
    w <= Qc && (c -= w);
  }
  return {
    width: c,
    height: d,
    x: p,
    y: h
  };
}
function tl(e, t) {
  const n = Qe(e, !0, t === "fixed"), i = n.top + e.clientTop, a = n.left + e.clientLeft, o = dt(e), s = e.clientWidth * o.x, c = e.clientHeight * o.y, d = a * o.x, p = i * o.y;
  return {
    width: s,
    height: c,
    x: d,
    y: p
  };
}
function pi(e, t, n) {
  let i;
  if (t === "viewport" || t === "layoutViewport")
    i = el(e, n, t);
  else if (t === "document")
    i = Jc(_e(e));
  else if (Se(t))
    i = tl(t, n);
  else {
    const a = Da(e);
    i = {
      x: t.x - a.x,
      y: t.y - a.y,
      width: t.width,
      height: t.height
    };
  }
  return Zt(i);
}
function nl(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let i = Pt(e, [], !1).filter((c) => Se(c) && bt(c) !== "body"), a = null;
  const o = Pe(e).position === "fixed";
  let s = o ? Je(e) : e;
  for (; Se(s) && !St(s); ) {
    const c = Pe(s), d = wr(s), p = a ? a.position : o ? "fixed" : "";
    !d && (p === "fixed" || p === "absolute" && c.position === "static") ? i = i.filter((f) => f !== s) : a = c, s = Je(s);
  }
  return t.set(e, i), i;
}
function rl(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: i,
    strategy: a
  } = e;
  const s = [...n === "clippingAncestors" ? ln(t) ? [] : nl(t, this._c) : [].concat(n), i], c = pi(t, s[0], a);
  let d = c.top, p = c.right, h = c.bottom, f = c.left;
  for (let u = 1; u < s.length; u++) {
    const g = pi(t, s[u], a);
    d = Ae(g.top, d), p = We(g.right, p), h = We(g.bottom, h), f = Ae(g.left, f);
  }
  return {
    width: p - f,
    height: h - d,
    x: f,
    y: d
  };
}
function il(e) {
  const {
    width: t,
    height: n
  } = $a(e);
  return {
    width: t,
    height: n
  };
}
function al(e, t, n) {
  const i = Ke(t), a = _e(t), o = n === "fixed", s = Qe(e, !0, o, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const d = $e(0);
  if ((i || !o) && ((bt(t) !== "body" || cn(a)) && (c = dn(t)), i)) {
    const u = Qe(t, !0, o, t);
    d.x = u.x + t.clientLeft, d.y = u.y + t.clientTop;
  }
  !i && a && (d.x = un(a));
  const p = a && !i && !o ? Ia(a, c) : $e(0), h = s.left + c.scrollLeft - d.x - p.x, f = s.top + c.scrollTop - d.y - p.y;
  return {
    x: h,
    y: f,
    width: s.width,
    height: s.height
  };
}
function Sn(e) {
  return Pe(e).position === "static";
}
function mi(e, t) {
  if (!Ke(e) || Pe(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return _e(e) === n && (n = n.ownerDocument.body), n;
}
function Ta(e, t) {
  const n = se(e);
  if (ln(e))
    return n;
  if (!Ke(e)) {
    let a = Je(e);
    for (; a && !St(a); ) {
      if (Se(a) && !Sn(a))
        return a;
      a = Je(a);
    }
    return n;
  }
  let i = mi(e, t);
  for (; i && Hc(i) && Sn(i); )
    i = mi(i, t);
  return i && St(i) && Sn(i) && !wr(i) ? n : i || Kc(e) || n;
}
const ol = async function(e) {
  const t = this.getOffsetParent || Ta, n = this.getDimensions, i = await n(e.floating);
  return {
    reference: al(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: i.width,
      height: i.height
    }
  };
};
function sl(e) {
  return Pe(e).direction === "rtl";
}
const cl = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Xc,
  getDocumentElement: _e,
  getClippingRect: rl,
  getOffsetParent: Ta,
  getElementRects: ol,
  getClientRects: Zc,
  getDimensions: il,
  getScale: dt,
  isElement: Se,
  isRTL: sl
};
function Oa(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function ll(e, t, n) {
  let i = null, a;
  const o = _e(e);
  function s() {
    var h;
    clearTimeout(a), (h = i) == null || h.disconnect(), i = null;
  }
  function c(h, f) {
    h === void 0 && (h = !1), f === void 0 && (f = 1), s();
    const u = e.getBoundingClientRect(), {
      left: g,
      top: m,
      width: v,
      height: y
    } = u;
    if (h || t(), !v || !y)
      return;
    const w = _t(m), x = _t(o.clientWidth - (g + v)), k = _t(o.clientHeight - (m + y)), M = _t(g), S = {
      rootMargin: -w + "px " + -x + "px " + -k + "px " + -M + "px",
      threshold: Ae(0, We(1, f)) || 1
    };
    let D = !0;
    function E(T) {
      const R = T[0].intersectionRatio;
      if (!Oa(u, e.getBoundingClientRect()))
        return c();
      if (R !== f) {
        if (!D)
          return c();
        R ? c(!1, R) : a = setTimeout(() => {
          c(!1, 1e-7);
        }, 1e3);
      }
      D = !1;
    }
    try {
      i = new IntersectionObserver(E, {
        ...S,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      i = new IntersectionObserver(E, S);
    }
    i.observe(e);
  }
  const d = se(e), p = () => c(n);
  return d.addEventListener("resize", p), c(!0), () => {
    d.removeEventListener("resize", p), s();
  };
}
function dl(e, t, n, i) {
  i === void 0 && (i = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: o = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: d = !1
  } = i, p = kr(e), h = a || o ? [...p ? Pt(p) : [], ...t ? Pt(t) : []] : [];
  h.forEach((w) => {
    a && w.addEventListener("scroll", n), o && w.addEventListener("resize", n);
  });
  const f = p && c ? ll(p, n, o) : null;
  let u = -1, g = null;
  s && (g = new ResizeObserver((w) => {
    let [x] = w;
    x && x.target === p && g && t && (g.unobserve(t), cancelAnimationFrame(u), u = requestAnimationFrame(() => {
      var k;
      (k = g) == null || k.observe(t);
    })), n();
  }), p && !d && g.observe(p), t && g.observe(t));
  let m, v = d ? Qe(e) : null;
  d && y();
  function y() {
    const w = Qe(e);
    v && !Oa(v, w) && n(), v = w, m = requestAnimationFrame(y);
  }
  return n(), () => {
    var w;
    h.forEach((x) => {
      a && x.removeEventListener("scroll", n), o && x.removeEventListener("resize", n);
    }), f == null || f(), (w = g) == null || w.disconnect(), g = null, d && cancelAnimationFrame(m);
  };
}
const ul = Bc, hl = jc, fl = _c, pl = Wc, ml = Fc, vi = Lc, vl = Vc, gl = (e, t, n) => {
  const i = /* @__PURE__ */ new Map(), a = n ?? {}, o = {
    ...cl,
    ...a.platform,
    _c: i
  };
  return Oc(e, t, {
    ...a,
    platform: o
  });
};
var bl = typeof document < "u", yl = function() {
}, Ht = bl ? tn : yl;
function Jt(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, i, a;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (i = n; i-- !== 0; )
        if (!Jt(e[i], t[i]))
          return !1;
      return !0;
    }
    if (a = Object.keys(e), n = a.length, n !== Object.keys(t).length)
      return !1;
    for (i = n; i-- !== 0; )
      if (!{}.hasOwnProperty.call(t, a[i]))
        return !1;
    for (i = n; i-- !== 0; ) {
      const o = a[i];
      if (!(o === "_owner" && e.$$typeof) && !Jt(e[o], t[o]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function La(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function gi(e, t) {
  const n = La(e);
  return Math.round(t * n) / n;
}
function Pn(e) {
  const t = b.useRef(e);
  return Ht(() => {
    t.current = e;
  }), t;
}
function wl(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: i = [],
    platform: a,
    elements: {
      reference: o,
      floating: s
    } = {},
    transform: c = !0,
    whileElementsMounted: d,
    open: p
  } = e, [h, f] = b.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [u, g] = b.useState(i);
  Jt(u, i) || g(i);
  const [m, v] = b.useState(null), [y, w] = b.useState(null), x = b.useCallback((I) => {
    I !== S.current && (S.current = I, v(I));
  }, []), k = b.useCallback((I) => {
    I !== D.current && (D.current = I, w(I));
  }, []), M = o || m, P = s || y, S = b.useRef(null), D = b.useRef(null), E = b.useRef(h), T = d != null, R = Pn(d), O = Pn(a), L = Pn(p), N = b.useCallback(() => {
    if (!S.current || !D.current)
      return;
    const I = {
      placement: t,
      strategy: n,
      middleware: u
    };
    O.current && (I.platform = O.current), gl(S.current, D.current, I).then((z) => {
      const A = {
        ...z,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: L.current !== !1
      };
      _.current && !Jt(E.current, A) && (E.current = A, rr.flushSync(() => {
        f(A);
      }));
    });
  }, [u, t, n, O, L]);
  Ht(() => {
    p === !1 && E.current.isPositioned && (E.current.isPositioned = !1, f((I) => ({
      ...I,
      isPositioned: !1
    })));
  }, [p]);
  const _ = b.useRef(!1);
  Ht(() => (_.current = !0, () => {
    _.current = !1;
  }), []), Ht(() => {
    if (M && (S.current = M), P && (D.current = P), M && P) {
      if (R.current)
        return R.current(M, P, N);
      N();
    }
  }, [M, P, N, R, T]);
  const j = b.useMemo(() => ({
    reference: S,
    floating: D,
    setReference: x,
    setFloating: k
  }), [x, k]), G = b.useMemo(() => ({
    reference: M,
    floating: P
  }), [M, P]), C = b.useMemo(() => {
    const I = {
      position: n,
      left: 0,
      top: 0
    };
    if (!G.floating)
      return I;
    const z = gi(G.floating, h.x), A = gi(G.floating, h.y);
    return c ? {
      ...I,
      transform: "translate(" + z + "px, " + A + "px)",
      ...La(G.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: z,
      top: A
    };
  }, [n, c, G.floating, h.x, h.y]);
  return b.useMemo(() => ({
    ...h,
    update: N,
    refs: j,
    elements: G,
    floatingStyles: C
  }), [h, N, j, G, C]);
}
const xl = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: i,
        padding: a
      } = typeof e == "function" ? e(n) : e;
      return i && t(i) ? i.current != null ? vi({
        element: i.current,
        padding: a
      }).fn(n) : {} : i ? vi({
        element: i,
        padding: a
      }).fn(n) : {};
    }
  };
}, kl = (e, t) => {
  const n = ul(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Cl = (e, t) => {
  const n = hl(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Ml = (e, t) => ({
  fn: vl(e).fn,
  options: [e, t]
}), Nl = (e, t) => {
  const n = fl(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Sl = (e, t) => {
  const n = pl(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Pl = (e, t) => {
  const n = ml(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, El = (e, t) => {
  const n = xl(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
};
var Rl = Object.defineProperty, Al = (e, t) => Rl(e, "name", { value: t, configurable: !0 });
function _a(e) {
  const [t, n] = b.useState(void 0);
  return ye(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const i = new ResizeObserver((a) => {
        if (!Array.isArray(a) || !a.length)
          return;
        const o = a[0];
        let s, c;
        if ("borderBoxSize" in o) {
          const d = o.borderBoxSize, p = Array.isArray(d) ? d[0] : d;
          s = p.inlineSize, c = p.blockSize;
        } else
          s = e.offsetWidth, c = e.offsetHeight;
        n({ width: s, height: c });
      });
      return i.observe(e, { box: "border-box" }), () => i.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
Al(_a, "useSize");
var $l = Object.defineProperty, ze = (e, t) => $l(e, "name", { value: t, configurable: !0 }), Fa = "Popper", [za, hn] = /* @__PURE__ */ Le(Fa), [Dl, Ba] = za(Fa), Il = /* @__PURE__ */ ze((e) => {
  const { __scopePopper: t, children: n } = e, [i, a] = b.useState(null), [o, s] = b.useState(void 0);
  return /* @__PURE__ */ r(
    Dl,
    {
      scope: t,
      anchor: i,
      onAnchorChange: a,
      placementState: o,
      setPlacementState: s,
      children: n
    }
  );
}, "Popper"), Tl = "PopperAnchor", Ol = /* @__PURE__ */ b.forwardRef(
  /* @__PURE__ */ ze(function(t, n) {
    const { __scopePopper: i, virtualRef: a, ...o } = t, s = Ba(Tl, i), c = b.useRef(null), d = s.onAnchorChange, p = b.useCallback(
      (v) => {
        c.current = v, v && d(v);
      },
      [d]
    ), h = ee(n, p), f = b.useRef(null);
    b.useEffect(() => {
      if (!a)
        return;
      const v = f.current;
      f.current = a.current, v !== f.current && d(f.current);
    });
    const u = s.placementState && fn(s.placementState), g = u == null ? void 0 : u[0], m = u == null ? void 0 : u[1];
    return a ? null : /* @__PURE__ */ r(
      le.div,
      {
        "data-radix-popper-side": g,
        "data-radix-popper-align": m,
        ...o,
        ref: h
      }
    );
  }, "PopperAnchor")
), ja = "PopperContent", [Ll, Hh] = za(ja), _l = /* @__PURE__ */ b.forwardRef(
  /* @__PURE__ */ ze(function(t, n) {
    var xe, fe, Ct, jr, Vr, Wr, Hr;
    const {
      __scopePopper: i,
      side: a = "bottom",
      sideOffset: o = 0,
      align: s = "center",
      alignOffset: c = 0,
      arrowPadding: d = 0,
      avoidCollisions: p = !0,
      collisionBoundary: h = [],
      collisionPadding: f = 0,
      sticky: u = "partial",
      hideWhenDetached: g = !1,
      updatePositionStrategy: m = "optimized",
      onPlaced: v,
      ...y
    } = t, w = Ba(ja, i), [x, k] = b.useState(null), M = ee(n, k), [P, S] = b.useState(null), D = _a(P), E = (D == null ? void 0 : D.width) ?? 0, T = (D == null ? void 0 : D.height) ?? 0, R = a + (s !== "center" ? "-" + s : ""), O = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, L = Array.isArray(h) ? h : [h], N = L.length > 0, _ = {
      padding: O,
      boundary: L.filter(Va),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: N
    }, { refs: j, floatingStyles: G, placement: C, isPositioned: I, middlewareData: z } = wl({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: R,
      whileElementsMounted: /* @__PURE__ */ ze((...wn) => dl(...wn, {
        animationFrame: m === "always"
      }), "whileElementsMounted"),
      elements: {
        reference: w.anchor
      },
      middleware: [
        kl({ mainAxis: o + T, alignmentAxis: c }),
        p && Cl({
          mainAxis: !0,
          crossAxis: !1,
          limiter: u === "partial" ? Ml() : void 0,
          ..._
        }),
        p && Nl({ ..._ }),
        Sl({
          ..._,
          apply: /* @__PURE__ */ ze(({ elements: wn, rects: Gr, availableWidth: Yo, availableHeight: Xo }) => {
            const { width: Zo, height: Jo } = Gr.reference, Tt = wn.floating.style;
            Tt.setProperty("--radix-popper-available-width", `${Yo}px`), Tt.setProperty("--radix-popper-available-height", `${Xo}px`), Tt.setProperty("--radix-popper-anchor-width", `${Zo}px`), Tt.setProperty("--radix-popper-anchor-height", `${Jo}px`);
          }, "apply")
        }),
        P && El({ element: P, padding: d }),
        Fl({ arrowWidth: E, arrowHeight: T }),
        g && Pl({
          strategy: "referenceHidden",
          ..._,
          // `hide` detects whether the anchor (reference) is clipped, so when
          // no explicit `collisionBoundary` is set we fall back to Floating
          // UI's default clipping ancestors (e.g. a scrollable menu). This
          // lets an occluded submenu hide once its anchor scrolls out of view
          // (#3237). The collision/size middlewares deliberately keep the
          // viewport-based default to avoid clamping content rendered inside
          // transformed or overflow-clipping portal containers.
          boundary: N ? _.boundary : void 0
        })
      ]
    }), A = w.setPlacementState;
    ye(() => (A(C), () => {
      A(void 0);
    }), [C, A]);
    const [$, V] = fn(C), B = Ie(v);
    ye(() => {
      I && (B == null || B());
    }, [I, B]);
    const F = (xe = z.arrow) == null ? void 0 : xe.x, X = (fe = z.arrow) == null ? void 0 : fe.y, K = ((Ct = z.arrow) == null ? void 0 : Ct.centerOffset) !== 0, [he, me] = b.useState();
    return ye(() => {
      x && me(window.getComputedStyle(x).zIndex);
    }, [x]), /* @__PURE__ */ r(
      "div",
      {
        ref: j.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...G,
          transform: I ? G.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: he,
          "--radix-popper-transform-origin": [
            (jr = z.transformOrigin) == null ? void 0 : jr.x,
            (Vr = z.transformOrigin) == null ? void 0 : Vr.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((Wr = z.hide) == null ? void 0 : Wr.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: t.dir,
        children: /* @__PURE__ */ r(
          Ll,
          {
            scope: i,
            placedSide: $,
            placedAlign: V,
            onArrowChange: S,
            arrowX: F,
            arrowY: X,
            shouldHideArrow: K,
            children: /* @__PURE__ */ r(
              le.div,
              {
                "data-side": $,
                "data-align": V,
                ...y,
                ref: M,
                style: {
                  ...y.style,
                  // if the PopperContent hasn't been placed yet (not all
                  // measurements done) we prevent animations so that users'
                  // animations don't kick in too early from the wrong sides.
                  animation: I ? (Hr = y.style) == null ? void 0 : Hr.animation : "none"
                }
              }
            )
          }
        )
      }
    );
  }, "PopperContent")
);
function Va(e) {
  return e !== null;
}
ze(Va, "isNotNull");
var Fl = /* @__PURE__ */ ze((e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var y, w, x;
    const { placement: n, rects: i, middlewareData: a } = t, s = ((y = a.arrow) == null ? void 0 : y.centerOffset) !== 0, c = s ? 0 : e.arrowWidth, d = s ? 0 : e.arrowHeight, [p, h] = fn(n), f = { start: "0%", center: "50%", end: "100%" }[h], u = (((w = a.arrow) == null ? void 0 : w.x) ?? 0) + c / 2, g = (((x = a.arrow) == null ? void 0 : x.y) ?? 0) + d / 2;
    let m = "", v = "";
    return p === "bottom" ? (m = s ? f : `${u}px`, v = `${-d}px`) : p === "top" ? (m = s ? f : `${u}px`, v = `${i.floating.height + d}px`) : p === "right" ? (m = `${-d}px`, v = s ? f : `${g}px`) : p === "left" && (m = `${i.floating.width + d}px`, v = s ? f : `${g}px`), { data: { x: m, y: v } };
  }
}), "transformOrigin");
function fn(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
ze(fn, "getSideAndAlignFromPlacement");
var Wa = Il, Ha = Ol, Ga = _l, zl = Object.defineProperty, Bl = (e, t) => zl(e, "name", { value: t, configurable: !0 }), Ua = /* @__PURE__ */ b.forwardRef(
  /* @__PURE__ */ Bl(function(t, n) {
    var d;
    const { container: i, ...a } = t, [o, s] = b.useState(!1);
    ye(() => s(!0), []);
    const c = i || o && ((d = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : d.body);
    return c ? rr.createPortal(/* @__PURE__ */ r(le.div, { ...a, ref: n }), c) : null;
  }, "Portal")
), jl = Object.defineProperty, Oe = (e, t) => jl(e, "name", { value: t, configurable: !0 });
function Ka(e, t) {
  return b.useReducer((n, i) => t[n][i] ?? n, e);
}
Oe(Ka, "useStateMachine");
var pn = /* @__PURE__ */ Oe((e) => {
  const { present: t, children: n } = e, i = qa(t), a = typeof n == "function" ? n({ present: i.isPresent }) : b.Children.only(n), o = Ya(i.ref, Xa(a));
  return typeof n == "function" || i.isPresent ? b.cloneElement(a, { ref: o }) : null;
}, "Presence");
function qa(e) {
  const [t, n] = b.useState(), i = b.useRef(null), a = b.useRef(e), o = b.useRef("none"), s = b.useRef(void 0), c = e ? "mounted" : "unmounted", [d, p] = Ka(c, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return b.useEffect(() => {
    d === "mounted" ? (o.current = s.current ?? st(i.current), s.current = void 0) : o.current = "none";
  }, [d]), ye(() => {
    const h = i.current, f = a.current;
    if (f !== e) {
      const g = o.current, m = st(h);
      e ? (s.current = m, p("MOUNT")) : m === "none" || (h == null ? void 0 : h.display) === "none" ? p("UNMOUNT") : p(f && g !== m ? "ANIMATION_OUT" : "UNMOUNT"), a.current = e;
    }
  }, [e, p]), ye(() => {
    if (t) {
      let h;
      const f = t.ownerDocument.defaultView ?? window, u = /* @__PURE__ */ Oe((m) => {
        const y = st(i.current).includes(CSS.escape(m.animationName));
        if (m.target === t && y && (p("ANIMATION_END"), !a.current)) {
          const w = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", h = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w);
          });
        }
      }, "handleAnimationEnd"), g = /* @__PURE__ */ Oe((m) => {
        m.target === t && (o.current = st(i.current));
      }, "handleAnimationStart");
      return t.addEventListener("animationstart", g), t.addEventListener("animationcancel", u), t.addEventListener("animationend", u), () => {
        f.clearTimeout(h), t.removeEventListener("animationstart", g), t.removeEventListener("animationcancel", u), t.removeEventListener("animationend", u);
      };
    } else
      p("ANIMATION_END");
  }, [t, p]), {
    isPresent: ["mounted", "unmountSuspended"].includes(d),
    ref: b.useCallback((h) => {
      if (h) {
        const f = getComputedStyle(h);
        i.current = f, s.current = st(f);
      } else
        i.current = null;
      n(h);
    }, [])
  };
}
Oe(qa, "usePresence");
function Xn(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
Oe(Xn, "setRef");
function Ya(...e) {
  const t = b.useRef(e);
  return t.current = e, b.useCallback((n) => {
    const i = t.current;
    let a = !1;
    const o = i.map((s) => {
      const c = Xn(s, n);
      return !a && typeof c == "function" && (a = !0), c;
    });
    if (a)
      return () => {
        for (let s = 0; s < o.length; s++) {
          const c = o[s];
          typeof c == "function" ? c() : Xn(i[s], null);
        }
      };
  }, []);
}
Oe(Ya, "useStableComposedRefs");
function st(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
Oe(st, "getAnimationName");
function Xa(e) {
  var i, a;
  let t = (i = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (a = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : a.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
Oe(Xa, "getElementRef");
var Vl = Object.defineProperty, Cr = (e, t) => Vl(e, "name", { value: t, configurable: !0 }), En = !1;
function Za() {
  const [e, t] = b.useState(En);
  return b.useEffect(() => {
    En || (En = !0, t(!0));
  }, []), e;
}
Cr(Za, "useIsHydrated");
var Ja = b[" useSyncExternalStore ".trim().toString()];
function Qa() {
  return () => {
  };
}
Cr(Qa, "subscribe");
function eo() {
  return Ja(
    Qa,
    () => !0,
    () => !1
  );
}
Cr(eo, "useIsHydratedModern");
var Wl = typeof Ja == "function" ? eo : Za, Hl = Object.defineProperty, tt = (e, t) => Hl(e, "name", { value: t, configurable: !0 }), Rn = "rovingFocusGroup.onEntryFocus", Gl = { bubbles: !1, cancelable: !0 }, mn = "RovingFocusGroup", [Zn, to, Ul] = /* @__PURE__ */ hr(mn), [Kl, vn] = /* @__PURE__ */ Le(
  mn,
  [Ul]
), [ql, Yl] = Kl(mn), Xl = /* @__PURE__ */ b.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ tt(function(t, n) {
    return /* @__PURE__ */ r(Zn.Provider, { scope: t.__scopeRovingFocusGroup, children: /* @__PURE__ */ r(Zn.Slot, { scope: t.__scopeRovingFocusGroup, children: /* @__PURE__ */ r(Zl, { ...t, ref: n }) }) });
  }, "RovingFocusGroup")
), Zl = /* @__PURE__ */ b.forwardRef(/* @__PURE__ */ tt(function(t, n) {
  const {
    __scopeRovingFocusGroup: i,
    orientation: a,
    loop: o = !1,
    dir: s,
    currentTabStopId: c,
    defaultCurrentTabStopId: d,
    onCurrentTabStopIdChange: p,
    onEntryFocus: h,
    preventScrollOnEntryFocus: f = !1,
    ...u
  } = t, g = b.useRef(null), m = ee(n, g), v = an(s), [y, w] = et({
    prop: c,
    defaultProp: d ?? null,
    onChange: p,
    caller: mn
  }), [x, k] = b.useState(!1), M = Ie(h), P = to(i), S = b.useRef(!1), [D, E] = b.useState(0);
  return b.useEffect(() => {
    const T = g.current;
    if (T)
      return T.addEventListener(Rn, M), () => T.removeEventListener(Rn, M);
  }, [M]), /* @__PURE__ */ r(
    ql,
    {
      scope: i,
      orientation: a,
      dir: v,
      loop: o,
      currentTabStopId: y,
      onItemFocus: b.useCallback(
        (T) => w(T),
        [w]
      ),
      onItemShiftTab: b.useCallback(() => k(!0), []),
      onFocusableItemAdd: b.useCallback(
        () => E((T) => T + 1),
        []
      ),
      onFocusableItemRemove: b.useCallback(
        () => E((T) => T - 1),
        []
      ),
      children: /* @__PURE__ */ r(
        le.div,
        {
          tabIndex: x || D === 0 ? -1 : 0,
          "data-orientation": a,
          ...u,
          ref: m,
          style: { outline: "none", ...t.style },
          onMouseDown: Y(t.onMouseDown, () => {
            S.current = !0;
          }),
          onFocus: Y(t.onFocus, (T) => {
            const R = !S.current;
            if (T.target === T.currentTarget && R && !x) {
              const O = new CustomEvent(Rn, Gl);
              if (T.currentTarget.dispatchEvent(O), !O.defaultPrevented) {
                const L = P().filter((C) => C.focusable), N = L.find((C) => C.active), _ = L.find((C) => C.id === y), G = [N, _, ...L].filter(
                  Boolean
                ).map((C) => C.ref.current);
                Mr(G, f);
              }
            }
            S.current = !1;
          }),
          onBlur: Y(t.onBlur, () => k(!1))
        }
      )
    }
  );
}, "RovingFocusGroupImpl")), Jl = "RovingFocusGroupItem", Ql = /* @__PURE__ */ b.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ tt(function(t, n) {
    const {
      __scopeRovingFocusGroup: i,
      focusable: a = !0,
      active: o = !1,
      tabStopId: s,
      children: c,
      ...d
    } = t, p = Nt(), h = s || p, f = Yl(Jl, i), u = f.currentTabStopId === h, g = to(i), { onFocusableItemAdd: m, onFocusableItemRemove: v, currentTabStopId: y } = f, w = Wl();
    return ye(() => {
      if (!(!w || !a))
        return m(), () => v();
    }, [w, a, m, v]), b.useEffect(() => {
      if (!(w || !a))
        return m(), () => v();
    }, [w, a, m, v]), /* @__PURE__ */ r(
      Zn.ItemSlot,
      {
        scope: i,
        id: h,
        focusable: a,
        active: o,
        children: /* @__PURE__ */ r(
          le.span,
          {
            tabIndex: u ? 0 : -1,
            "data-orientation": f.orientation,
            ...d,
            ref: n,
            onMouseDown: Y(t.onMouseDown, (x) => {
              a ? f.onItemFocus(h) : x.preventDefault();
            }),
            onFocus: Y(t.onFocus, () => f.onItemFocus(h)),
            onKeyDown: Y(t.onKeyDown, (x) => {
              if (x.key === "Tab" && x.shiftKey) {
                f.onItemShiftTab();
                return;
              }
              if (x.target !== x.currentTarget) return;
              const k = ro(x, f.orientation, f.dir);
              if (k !== void 0) {
                if (x.metaKey || x.ctrlKey || x.altKey || x.shiftKey) return;
                x.preventDefault();
                let P = g().filter((S) => S.focusable).map((S) => S.ref.current);
                if (k === "last") P.reverse();
                else if (k === "prev" || k === "next") {
                  k === "prev" && P.reverse();
                  const S = P.indexOf(x.currentTarget);
                  P = f.loop ? io(P, S + 1) : P.slice(S + 1);
                }
                setTimeout(() => Mr(P));
              }
            }),
            children: typeof c == "function" ? c({ isCurrentTabStop: u, hasTabStop: y != null }) : c
          }
        )
      }
    );
  }, "RovingFocusGroupItem")
), ed = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function no(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
tt(no, "getDirectionAwareKey");
function ro(e, t, n) {
  const i = no(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(i)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(i)))
    return ed[i];
}
tt(ro, "getFocusIntent");
function Mr(e, t = !1) {
  const n = document.activeElement;
  for (const i of e)
    if (i === n || (i.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
tt(Mr, "focusFirst");
function io(e, t) {
  return e.map((n, i) => e[(t + i) % e.length]);
}
tt(io, "wrapArray");
var ao = Xl, oo = Ql, td = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, it = /* @__PURE__ */ new WeakMap(), Ft = /* @__PURE__ */ new WeakMap(), zt = {}, An = 0, so = function(e) {
  return e && (e.host || so(e.parentNode));
}, nd = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var i = so(n);
    return i && e.contains(i) ? i : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, rd = function(e, t, n, i) {
  var a = nd(t, Array.isArray(e) ? e : [e]);
  zt[n] || (zt[n] = /* @__PURE__ */ new WeakMap());
  var o = zt[n], s = [], c = /* @__PURE__ */ new Set(), d = new Set(a), p = function(f) {
    !f || c.has(f) || (c.add(f), p(f.parentNode));
  };
  a.forEach(p);
  var h = function(f) {
    !f || d.has(f) || Array.prototype.forEach.call(f.children, function(u) {
      if (c.has(u))
        h(u);
      else
        try {
          var g = u.getAttribute(i), m = g !== null && g !== "false", v = (it.get(u) || 0) + 1, y = (o.get(u) || 0) + 1;
          it.set(u, v), o.set(u, y), s.push(u), v === 1 && m && Ft.set(u, !0), y === 1 && u.setAttribute(n, "true"), m || u.setAttribute(i, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", u, w);
        }
    });
  };
  return h(t), c.clear(), An++, function() {
    s.forEach(function(f) {
      var u = it.get(f) - 1, g = o.get(f) - 1;
      it.set(f, u), o.set(f, g), u || (Ft.has(f) || f.removeAttribute(i), Ft.delete(f)), g || f.removeAttribute(n);
    }), An--, An || (it = /* @__PURE__ */ new WeakMap(), it = /* @__PURE__ */ new WeakMap(), Ft = /* @__PURE__ */ new WeakMap(), zt = {});
  };
}, co = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var i = Array.from(Array.isArray(e) ? e : [e]), a = td(e);
  return a ? (i.push.apply(i, Array.from(a.querySelectorAll("[aria-live], script"))), rd(i, a, n, "aria-hidden")) : function() {
    return null;
  };
}, Ce = function() {
  return Ce = Object.assign || function(t) {
    for (var n, i = 1, a = arguments.length; i < a; i++) {
      n = arguments[i];
      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, Ce.apply(this, arguments);
};
function lo(e, t) {
  var n = {};
  for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, i = Object.getOwnPropertySymbols(e); a < i.length; a++)
      t.indexOf(i[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[a]) && (n[i[a]] = e[i[a]]);
  return n;
}
function id(e, t, n) {
  if (n || arguments.length === 2) for (var i = 0, a = t.length, o; i < a; i++)
    (o || !(i in t)) && (o || (o = Array.prototype.slice.call(t, 0, i)), o[i] = t[i]);
  return e.concat(o || Array.prototype.slice.call(t));
}
var Gt = "right-scroll-bar-position", Ut = "width-before-scroll-bar", ad = "with-scroll-bars-hidden", od = "--removed-body-scroll-bar-size";
function $n(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function sd(e, t) {
  var n = H(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(i) {
          var a = n.value;
          a !== i && (n.value = i, n.callback(i, a));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var cd = typeof window < "u" ? b.useLayoutEffect : b.useEffect, bi = /* @__PURE__ */ new WeakMap();
function ld(e, t) {
  var n = sd(null, function(i) {
    return e.forEach(function(a) {
      return $n(a, i);
    });
  });
  return cd(function() {
    var i = bi.get(n);
    if (i) {
      var a = new Set(i), o = new Set(e), s = n.current;
      a.forEach(function(c) {
        o.has(c) || $n(c, null);
      }), o.forEach(function(c) {
        a.has(c) || $n(c, s);
      });
    }
    bi.set(n, e);
  }, [e]), n;
}
function dd(e) {
  return e;
}
function ud(e, t) {
  t === void 0 && (t = dd);
  var n = [], i = !1, a = {
    read: function() {
      if (i)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(o) {
      var s = t(o, i);
      return n.push(s), function() {
        n = n.filter(function(c) {
          return c !== s;
        });
      };
    },
    assignSyncMedium: function(o) {
      for (i = !0; n.length; ) {
        var s = n;
        n = [], s.forEach(o);
      }
      n = {
        push: function(c) {
          return o(c);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(o) {
      i = !0;
      var s = [];
      if (n.length) {
        var c = n;
        n = [], c.forEach(o), s = n;
      }
      var d = function() {
        var h = s;
        s = [], h.forEach(o);
      }, p = function() {
        return Promise.resolve().then(d);
      };
      p(), n = {
        push: function(h) {
          s.push(h), p();
        },
        filter: function(h) {
          return s = s.filter(h), n;
        }
      };
    }
  };
  return a;
}
function hd(e) {
  e === void 0 && (e = {});
  var t = ud(null);
  return t.options = Ce({ async: !0, ssr: !1 }, e), t;
}
var uo = function(e) {
  var t = e.sideCar, n = lo(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var i = t.read();
  if (!i)
    throw new Error("Sidecar medium not found");
  return b.createElement(i, Ce({}, n));
};
uo.isSideCarExport = !0;
function fd(e, t) {
  return e.useMedium(t), uo;
}
var ho = hd(), Dn = function() {
}, gn = b.forwardRef(function(e, t) {
  var n = b.useRef(null), i = b.useState({
    onScrollCapture: Dn,
    onWheelCapture: Dn,
    onTouchMoveCapture: Dn
  }), a = i[0], o = i[1], s = e.forwardProps, c = e.children, d = e.className, p = e.removeScrollBar, h = e.enabled, f = e.shards, u = e.sideCar, g = e.noRelative, m = e.noIsolation, v = e.inert, y = e.allowPinchZoom, w = e.as, x = w === void 0 ? "div" : w, k = e.gapMode, M = lo(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), P = u, S = ld([n, t]), D = Ce(Ce({}, M), a);
  return b.createElement(
    b.Fragment,
    null,
    h && b.createElement(P, { sideCar: ho, removeScrollBar: p, shards: f, noRelative: g, noIsolation: m, inert: v, setCallbacks: o, allowPinchZoom: !!y, lockRef: n, gapMode: k }),
    s ? b.cloneElement(b.Children.only(c), Ce(Ce({}, D), { ref: S })) : b.createElement(x, Ce({}, D, { className: d, ref: S }), c)
  );
});
gn.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
gn.classNames = {
  fullWidth: Ut,
  zeroRight: Gt
};
var pd = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function md() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = pd();
  return t && e.setAttribute("nonce", t), e;
}
function vd(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function gd(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var bd = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = md()) && (vd(t, n), gd(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, yd = function() {
  var e = bd();
  return function(t, n) {
    b.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, fo = function() {
  var e = yd(), t = function(n) {
    var i = n.styles, a = n.dynamic;
    return e(i, a), null;
  };
  return t;
}, wd = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, In = function(e) {
  return parseInt(e || "", 10) || 0;
}, xd = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], i = t[e === "padding" ? "paddingTop" : "marginTop"], a = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [In(n), In(i), In(a)];
}, kd = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return wd;
  var t = xd(e), n = document.documentElement.clientWidth, i = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, i - n + t[2] - t[0])
  };
}, Cd = fo(), ut = "data-scroll-locked", Md = function(e, t, n, i) {
  var a = e.left, o = e.top, s = e.right, c = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(ad, ` {
   overflow: hidden `).concat(i, `;
   padding-right: `).concat(c, "px ").concat(i, `;
  }
  body[`).concat(ut, `] {
    overflow: hidden `).concat(i, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(i, ";"),
    n === "margin" && `
    padding-left: `.concat(a, `px;
    padding-top: `).concat(o, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(c, "px ").concat(i, `;
    `),
    n === "padding" && "padding-right: ".concat(c, "px ").concat(i, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Gt, ` {
    right: `).concat(c, "px ").concat(i, `;
  }
  
  .`).concat(Ut, ` {
    margin-right: `).concat(c, "px ").concat(i, `;
  }
  
  .`).concat(Gt, " .").concat(Gt, ` {
    right: 0 `).concat(i, `;
  }
  
  .`).concat(Ut, " .").concat(Ut, ` {
    margin-right: 0 `).concat(i, `;
  }
  
  body[`).concat(ut, `] {
    `).concat(od, ": ").concat(c, `px;
  }
`);
}, yi = function() {
  var e = parseInt(document.body.getAttribute(ut) || "0", 10);
  return isFinite(e) ? e : 0;
}, Nd = function() {
  b.useEffect(function() {
    return document.body.setAttribute(ut, (yi() + 1).toString()), function() {
      var e = yi() - 1;
      e <= 0 ? document.body.removeAttribute(ut) : document.body.setAttribute(ut, e.toString());
    };
  }, []);
}, Sd = function(e) {
  var t = e.noRelative, n = e.noImportant, i = e.gapMode, a = i === void 0 ? "margin" : i;
  Nd();
  var o = b.useMemo(function() {
    return kd(a);
  }, [a]);
  return b.createElement(Cd, { styles: Md(o, !t, a, n ? "" : "!important") });
}, Jn = !1;
if (typeof window < "u")
  try {
    var Bt = Object.defineProperty({}, "passive", {
      get: function() {
        return Jn = !0, !0;
      }
    });
    window.addEventListener("test", Bt, Bt), window.removeEventListener("test", Bt, Bt);
  } catch {
    Jn = !1;
  }
var at = Jn ? { passive: !1 } : !1, Pd = function(e) {
  return e.tagName === "TEXTAREA";
}, po = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Pd(e) && n[t] === "visible")
  );
}, Ed = function(e) {
  return po(e, "overflowY");
}, Rd = function(e) {
  return po(e, "overflowX");
}, wi = function(e, t) {
  var n = t.ownerDocument, i = t;
  do {
    typeof ShadowRoot < "u" && i instanceof ShadowRoot && (i = i.host);
    var a = mo(e, i);
    if (a) {
      var o = vo(e, i), s = o[1], c = o[2];
      if (s > c)
        return !0;
    }
    i = i.parentNode;
  } while (i && i !== n.body);
  return !1;
}, Ad = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, i = e.clientHeight;
  return [
    t,
    n,
    i
  ];
}, $d = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, i = e.clientWidth;
  return [
    t,
    n,
    i
  ];
}, mo = function(e, t) {
  return e === "v" ? Ed(t) : Rd(t);
}, vo = function(e, t) {
  return e === "v" ? Ad(t) : $d(t);
}, Dd = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Id = function(e, t, n, i, a) {
  var o = Dd(e, window.getComputedStyle(t).direction), s = o * i, c = n.target, d = t.contains(c), p = !1, h = s > 0, f = 0, u = 0;
  do {
    if (!c)
      break;
    var g = vo(e, c), m = g[0], v = g[1], y = g[2], w = v - y - o * m;
    (m || w) && mo(e, c) && (f += w, u += m);
    var x = c.parentNode;
    c = x && x.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? x.host : x;
  } while (
    // portaled content
    !d && c !== document.body || // self content
    d && (t.contains(c) || t === c)
  );
  return (h && Math.abs(f) < 1 || !h && Math.abs(u) < 1) && (p = !0), p;
}, jt = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, xi = function(e) {
  return [e.deltaX, e.deltaY];
}, ki = function(e) {
  return e && "current" in e ? e.current : e;
}, Td = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Od = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Ld = 0, ot = [];
function _d(e) {
  var t = b.useRef([]), n = b.useRef([0, 0]), i = b.useRef(), a = b.useState(Ld++)[0], o = b.useState(fo)[0], s = b.useRef(e);
  b.useEffect(function() {
    s.current = e;
  }, [e]), b.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(a));
      var v = id([e.lockRef.current], (e.shards || []).map(ki), !0).filter(Boolean);
      return v.forEach(function(y) {
        return y.classList.add("allow-interactivity-".concat(a));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(a)), v.forEach(function(y) {
          return y.classList.remove("allow-interactivity-".concat(a));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var c = b.useCallback(function(v, y) {
    if ("touches" in v && v.touches.length === 2 || v.type === "wheel" && v.ctrlKey)
      return !s.current.allowPinchZoom;
    var w = jt(v), x = n.current, k = "deltaX" in v ? v.deltaX : x[0] - w[0], M = "deltaY" in v ? v.deltaY : x[1] - w[1], P, S = v.target, D = Math.abs(k) > Math.abs(M) ? "h" : "v";
    if ("touches" in v && D === "h" && S.type === "range")
      return !1;
    var E = window.getSelection(), T = E && E.anchorNode, R = T ? T === S || T.contains(S) : !1;
    if (R)
      return !1;
    var O = wi(D, S);
    if (!O)
      return !0;
    if (O ? P = D : (P = D === "v" ? "h" : "v", O = wi(D, S)), !O)
      return !1;
    if (!i.current && "changedTouches" in v && (k || M) && (i.current = P), !P)
      return !0;
    var L = i.current || P;
    return Id(L, y, v, L === "h" ? k : M);
  }, []), d = b.useCallback(function(v) {
    var y = v;
    if (!(!ot.length || ot[ot.length - 1] !== o)) {
      var w = "deltaY" in y ? xi(y) : jt(y), x = t.current.filter(function(P) {
        return P.name === y.type && (P.target === y.target || y.target === P.shadowParent) && Td(P.delta, w);
      })[0];
      if (x && x.should) {
        y.cancelable && y.preventDefault();
        return;
      }
      if (!x) {
        var k = (s.current.shards || []).map(ki).filter(Boolean).filter(function(P) {
          return P.contains(y.target);
        }), M = k.length > 0 ? c(y, k[0]) : !s.current.noIsolation;
        M && y.cancelable && y.preventDefault();
      }
    }
  }, []), p = b.useCallback(function(v, y, w, x) {
    var k = { name: v, delta: y, target: w, should: x, shadowParent: Fd(w) };
    t.current.push(k), setTimeout(function() {
      t.current = t.current.filter(function(M) {
        return M !== k;
      });
    }, 1);
  }, []), h = b.useCallback(function(v) {
    n.current = jt(v), i.current = void 0;
  }, []), f = b.useCallback(function(v) {
    p(v.type, xi(v), v.target, c(v, e.lockRef.current));
  }, []), u = b.useCallback(function(v) {
    p(v.type, jt(v), v.target, c(v, e.lockRef.current));
  }, []);
  b.useEffect(function() {
    return ot.push(o), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: u
    }), document.addEventListener("wheel", d, at), document.addEventListener("touchmove", d, at), document.addEventListener("touchstart", h, at), function() {
      ot = ot.filter(function(v) {
        return v !== o;
      }), document.removeEventListener("wheel", d, at), document.removeEventListener("touchmove", d, at), document.removeEventListener("touchstart", h, at);
    };
  }, []);
  var g = e.removeScrollBar, m = e.inert;
  return b.createElement(
    b.Fragment,
    null,
    m ? b.createElement(o, { styles: Od(a) }) : null,
    g ? b.createElement(Sd, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Fd(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const zd = fd(ho, _d);
var Nr = b.forwardRef(function(e, t) {
  return b.createElement(gn, Ce({}, e, { ref: t, sideCar: zd }));
});
Nr.classNames = gn.classNames;
var Bd = Object.defineProperty, J = (e, t) => Bd(e, "name", { value: t, configurable: !0 }), jd = ["Enter", " "], Vd = ["ArrowDown", "PageUp", "Home"], go = ["ArrowUp", "PageDown", "End"], Wd = [...Vd, ...go], bn = "Menu", [Qn, Hd, Gd] = /* @__PURE__ */ hr(bn), [nt, bo] = /* @__PURE__ */ Le(bn, [
  Gd,
  hn,
  vn
]), Sr = hn(), yo = vn(), [Ud, It] = nt(bn), [Kd, Pr] = nt(bn), qd = /* @__PURE__ */ J((e) => {
  const { __scopeMenu: t, open: n = !1, children: i, dir: a, onOpenChange: o, modal: s = !0 } = e, c = Sr(t), [d, p] = b.useState(null), h = b.useRef(!1), f = Ie(o), u = an(a);
  return b.useEffect(() => {
    const g = /* @__PURE__ */ J(() => {
      h.current = !0, document.addEventListener("pointerdown", m, { capture: !0, once: !0 }), document.addEventListener("pointermove", m, { capture: !0, once: !0 });
    }, "handleKeyDown"), m = /* @__PURE__ */ J(() => h.current = !1, "handlePointer");
    return document.addEventListener("keydown", g, { capture: !0 }), () => {
      document.removeEventListener("keydown", g, { capture: !0 }), document.removeEventListener("pointerdown", m, { capture: !0 }), document.removeEventListener("pointermove", m, { capture: !0 });
    };
  }, []), b.useEffect(() => {
    if (!n)
      return;
    const g = /* @__PURE__ */ J(() => f(!1), "handleBlur");
    return window.addEventListener("blur", g), () => window.removeEventListener("blur", g);
  }, [n, f]), /* @__PURE__ */ r(Wa, { ...c, children: /* @__PURE__ */ r(
    Ud,
    {
      scope: t,
      open: n,
      onOpenChange: f,
      content: d,
      onContentChange: p,
      children: /* @__PURE__ */ r(
        Kd,
        {
          scope: t,
          onClose: b.useCallback(() => f(!1), [f]),
          isUsingKeyboardRef: h,
          dir: u,
          modal: s,
          children: i
        }
      )
    }
  ) });
}, "Menu"), Yd = /* @__PURE__ */ b.forwardRef(
  /* @__PURE__ */ J(function(t, n) {
    const { __scopeMenu: i, ...a } = t, o = Sr(i);
    return /* @__PURE__ */ r(Ha, { ...o, ...a, ref: n });
  }, "MenuAnchor")
), wo = "MenuPortal", [Xd, Zd] = nt(wo, {
  forceMount: void 0
}), Jd = /* @__PURE__ */ J((e) => {
  const { __scopeMenu: t, forceMount: n, children: i, container: a } = e, o = It(wo, t);
  return /* @__PURE__ */ r(Xd, { scope: t, forceMount: n, children: /* @__PURE__ */ r(pn, { present: n || o.open, children: /* @__PURE__ */ r(Ua, { asChild: !0, container: a, children: i }) }) });
}, "MenuPortal"), Be = "MenuContent", [Qd, xo] = nt(Be), eu = /* @__PURE__ */ b.forwardRef(
  /* @__PURE__ */ J(function(t, n) {
    const i = Zd(Be, t.__scopeMenu), { forceMount: a = i.forceMount, ...o } = t, s = It(Be, t.__scopeMenu), c = Pr(Be, t.__scopeMenu);
    return /* @__PURE__ */ r(Qn.Provider, { scope: t.__scopeMenu, children: /* @__PURE__ */ r(pn, { present: a || s.open, children: /* @__PURE__ */ r(Qn.Slot, { scope: t.__scopeMenu, children: c.modal ? /* @__PURE__ */ r(tu, { ...o, ref: n }) : /* @__PURE__ */ r(nu, { ...o, ref: n }) }) }) });
  }, "MenuContent")
), tu = /* @__PURE__ */ b.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ J(function(t, n) {
    const i = It(Be, t.__scopeMenu), a = b.useRef(null), o = ee(n, a);
    return b.useEffect(() => {
      const s = a.current;
      if (s) return co(s);
    }, []), /* @__PURE__ */ r(
      ko,
      {
        ...t,
        ref: o,
        trapFocus: i.open,
        disableOutsidePointerEvents: i.open,
        disableOutsideScroll: !0,
        onFocusOutside: Y(
          t.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => i.onOpenChange(!1)
      }
    );
  }, "MenuRootContentModal")
), nu = /* @__PURE__ */ b.forwardRef(/* @__PURE__ */ J(function(t, n) {
  const i = It(Be, t.__scopeMenu);
  return /* @__PURE__ */ r(
    ko,
    {
      ...t,
      ref: n,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => i.onOpenChange(!1)
    }
  );
}, "MenuRootContentNonModal")), ru = /* @__PURE__ */ Ve("MenuContent.ScrollLock"), ko = /* @__PURE__ */ b.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ J(function(t, n) {
    const {
      __scopeMenu: i,
      loop: a = !1,
      trapFocus: o,
      onOpenAutoFocus: s,
      onCloseAutoFocus: c,
      disableOutsidePointerEvents: d,
      onEntryFocus: p,
      onEscapeKeyDown: h,
      onPointerDownOutside: f,
      onFocusOutside: u,
      onInteractOutside: g,
      onDismiss: m,
      disableOutsideScroll: v,
      ...y
    } = t, w = It(Be, i), x = Pr(Be, i), k = Sr(i), M = yo(i), P = Hd(i), [S, D] = b.useState(null), E = b.useRef(null), T = ee(n, E, w.onContentChange), R = b.useRef(0), O = b.useRef(""), L = b.useRef(0), N = b.useRef(null), _ = b.useRef("right"), j = b.useRef(0), G = v ? Nr : b.Fragment, C = v ? { as: ru, allowPinchZoom: !0 } : void 0, I = /* @__PURE__ */ J((A) => {
      var me, xe;
      const $ = O.current + A, V = P().filter((fe) => !fe.disabled), B = document.activeElement, F = (me = V.find((fe) => fe.ref.current === B)) == null ? void 0 : me.textValue, X = V.map((fe) => fe.textValue), K = Po(X, $, F), he = (xe = V.find((fe) => fe.textValue === K)) == null ? void 0 : xe.ref.current;
      (/* @__PURE__ */ J((function fe(Ct) {
        O.current = Ct, window.clearTimeout(R.current), Ct !== "" && (R.current = window.setTimeout(() => fe(""), 1e3));
      }), "updateSearch"))($), he && setTimeout(() => he.focus());
    }, "handleTypeaheadSearch");
    b.useEffect(() => () => window.clearTimeout(R.current), []), on();
    const z = b.useCallback((A) => {
      var V, B;
      return _.current === ((V = N.current) == null ? void 0 : V.side) && Ro(A, (B = N.current) == null ? void 0 : B.area);
    }, []);
    return /* @__PURE__ */ r(
      Qd,
      {
        scope: i,
        searchRef: O,
        onItemEnter: b.useCallback(
          (A) => {
            z(A) && A.preventDefault();
          },
          [z]
        ),
        onItemLeave: b.useCallback(
          (A) => {
            var $;
            z(A) || (($ = E.current) == null || $.focus(), D(null));
          },
          [z]
        ),
        onTriggerLeave: b.useCallback(
          (A) => {
            z(A) && A.preventDefault();
          },
          [z]
        ),
        pointerGraceTimerRef: L,
        onPointerGraceIntentChange: b.useCallback((A) => {
          N.current = A;
        }, []),
        children: /* @__PURE__ */ r(G, { ...C, children: /* @__PURE__ */ r(
          ya,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: Y(s, (A) => {
              var $;
              A.preventDefault(), ($ = E.current) == null || $.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: c,
            children: /* @__PURE__ */ r(
              va,
              {
                asChild: !0,
                disableOutsidePointerEvents: d,
                onEscapeKeyDown: h,
                onPointerDownOutside: f,
                onFocusOutside: u,
                onInteractOutside: g,
                onDismiss: m,
                children: /* @__PURE__ */ r(
                  ao,
                  {
                    asChild: !0,
                    ...M,
                    dir: x.dir,
                    orientation: "vertical",
                    loop: a,
                    currentTabStopId: S,
                    onCurrentTabStopIdChange: D,
                    onEntryFocus: Y(p, (A) => {
                      x.isUsingKeyboardRef.current || A.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ r(
                      Ga,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Co(w.open),
                        "data-radix-menu-content": "",
                        dir: x.dir,
                        ...k,
                        ...y,
                        ref: T,
                        style: { outline: "none", ...y.style },
                        onKeyDown: Y(y.onKeyDown, (A) => {
                          const V = A.target.closest("[data-radix-menu-content]") === A.currentTarget, B = A.ctrlKey || A.altKey || A.metaKey, F = A.key.length === 1;
                          V && (A.key === "Tab" && A.preventDefault(), !B && F && I(A.key));
                          const X = E.current;
                          if (A.target !== X || !Wd.includes(A.key)) return;
                          A.preventDefault();
                          const he = P().filter((me) => !me.disabled).map((me) => me.ref.current);
                          go.includes(A.key) && he.reverse(), No(he);
                        }),
                        onBlur: Y(t.onBlur, (A) => {
                          A.currentTarget.contains(A.target) || (window.clearTimeout(R.current), O.current = "");
                        }),
                        onPointerMove: Y(
                          t.onPointerMove,
                          Qt((A) => {
                            const $ = A.target, V = j.current !== A.clientX;
                            if (A.currentTarget.contains($) && V) {
                              const B = A.clientX > j.current ? "right" : "left";
                              _.current = B, j.current = A.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }, "MenuContentImpl")
), er = "MenuItem", Ci = "menu.itemSelect", iu = /* @__PURE__ */ b.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ J(function(t, n) {
    const { disabled: i = !1, onSelect: a, ...o } = t, s = b.useRef(null), c = Pr(er, t.__scopeMenu), d = xo(er, t.__scopeMenu), p = ee(n, s), h = b.useRef(!1), f = /* @__PURE__ */ J(() => {
      const u = s.current;
      if (!i && u) {
        const g = new CustomEvent(Ci, { bubbles: !0, cancelable: !0 });
        u.addEventListener(Ci, (m) => a == null ? void 0 : a(m), { once: !0 }), ur(u, g), g.defaultPrevented ? h.current = !1 : c.onClose();
      }
    }, "handleSelect");
    return /* @__PURE__ */ r(
      au,
      {
        ...o,
        ref: p,
        disabled: i,
        onClick: Y(t.onClick, f),
        onPointerDown: (u) => {
          var g;
          (g = t.onPointerDown) == null || g.call(t, u), h.current = !0;
        },
        onPointerUp: Y(t.onPointerUp, (u) => {
          var g;
          h.current || (g = u.currentTarget) == null || g.click();
        }),
        onKeyDown: Y(t.onKeyDown, (u) => {
          i || u.target !== u.currentTarget || d.searchRef.current !== "" && u.key === " " || jd.includes(u.key) && (u.currentTarget.click(), u.preventDefault());
        })
      }
    );
  }, "MenuItem")
), au = /* @__PURE__ */ b.forwardRef(
  /* @__PURE__ */ J(function(t, n) {
    const { __scopeMenu: i, disabled: a = !1, textValue: o, ...s } = t, c = xo(er, i), d = yo(i), p = b.useRef(null), h = ee(n, p), [f, u] = b.useState(!1), [g, m] = b.useState("");
    return b.useEffect(() => {
      const v = p.current;
      v && m((v.textContent ?? "").trim());
    }, [s.children]), /* @__PURE__ */ r(
      Qn.ItemSlot,
      {
        scope: i,
        disabled: a,
        textValue: o ?? g,
        children: /* @__PURE__ */ r(oo, { asChild: !0, ...d, focusable: !a, children: /* @__PURE__ */ r(
          le.div,
          {
            role: "menuitem",
            "data-highlighted": f ? "" : void 0,
            "aria-disabled": a || void 0,
            "data-disabled": a ? "" : void 0,
            ...s,
            ref: h,
            onPointerMove: Y(
              t.onPointerMove,
              Qt((v) => {
                a ? c.onItemLeave(v) : (c.onItemEnter(v), v.defaultPrevented || v.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: Y(
              t.onPointerLeave,
              Qt((v) => c.onItemLeave(v))
            ),
            onFocus: Y(t.onFocus, () => u(!0)),
            onBlur: Y(t.onBlur, () => u(!1))
          }
        ) })
      }
    );
  }, "MenuItemImpl")
), ou = "MenuRadioGroup", [Gh, Uh] = nt(
  ou,
  { value: void 0, onValueChange: /* @__PURE__ */ J(() => {
  }, "onValueChange") }
), su = "MenuItemIndicator", [Kh, qh] = nt(
  su,
  { checked: !1 }
), cu = /* @__PURE__ */ b.forwardRef(
  /* @__PURE__ */ J(function(t, n) {
    const { __scopeMenu: i, ...a } = t;
    return /* @__PURE__ */ r(
      le.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...a,
        ref: n
      }
    );
  }, "MenuSeparator")
), lu = "MenuSub", [Yh, Xh] = nt(lu);
function Co(e) {
  return e ? "open" : "closed";
}
J(Co, "getOpenState");
function Mo(e) {
  return e === "indeterminate";
}
J(Mo, "isIndeterminate");
function du(e) {
  return Mo(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
J(du, "getCheckedState");
function No(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
J(No, "focusFirst");
function So(e, t) {
  return e.map((n, i) => e[(t + i) % e.length]);
}
J(So, "wrapArray");
function Po(e, t, n) {
  const a = t.length > 1 && Array.from(t).every((p) => p === t[0]) ? t[0] : t, o = n ? e.indexOf(n) : -1;
  let s = So(e, Math.max(o, 0));
  a.length === 1 && (s = s.filter((p) => p !== n));
  const d = s.find(
    (p) => p.toLowerCase().startsWith(a.toLowerCase())
  );
  return d !== n ? d : void 0;
}
J(Po, "getNextMatch");
function Eo(e, t) {
  const { x: n, y: i } = e;
  let a = !1;
  for (let o = 0, s = t.length - 1; o < t.length; s = o++) {
    const c = t[o], d = t[s], p = c.x, h = c.y, f = d.x, u = d.y;
    h > i != u > i && n < (f - p) * (i - h) / (u - h) + p && (a = !a);
  }
  return a;
}
J(Eo, "isPointInPolygon");
function Ro(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return Eo(n, t);
}
J(Ro, "isPointerInGraceArea");
function Qt(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
J(Qt, "whenMouse");
var uu = qd, hu = Yd, fu = Jd, pu = eu, mu = iu, vu = cu, gu = Object.defineProperty, yt = (e, t) => gu(e, "name", { value: t, configurable: !0 }), Er = "DropdownMenu", [bu, Zh] = /* @__PURE__ */ Le(
  Er,
  [bo]
), wt = bo(), [yu, Ao] = bu(Er), wu = /* @__PURE__ */ yt((e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: i,
    open: a,
    defaultOpen: o,
    onOpenChange: s,
    modal: c = !0
  } = e, d = wt(t), p = b.useRef(null), [h, f] = et({
    prop: a,
    defaultProp: o ?? !1,
    onChange: s,
    caller: Er
  });
  return /* @__PURE__ */ r(
    yu,
    {
      scope: t,
      triggerId: Nt(),
      triggerRef: p,
      contentId: Nt(),
      open: h,
      onOpenChange: f,
      onOpenToggle: b.useCallback(() => f((u) => !u), [f]),
      modal: c,
      children: /* @__PURE__ */ r(uu, { ...d, open: h, onOpenChange: f, dir: i, modal: c, children: n })
    }
  );
}, "DropdownMenu"), xu = "DropdownMenuTrigger", ku = /* @__PURE__ */ b.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ yt(function(t, n) {
    const { __scopeDropdownMenu: i, disabled: a = !1, ...o } = t, s = Ao(xu, i), c = wt(i), d = ee(n, s.triggerRef);
    return /* @__PURE__ */ r(hu, { asChild: !0, ...c, children: /* @__PURE__ */ r(
      le.button,
      {
        type: "button",
        id: s.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": s.open,
        "aria-controls": s.open ? s.contentId : void 0,
        "data-state": s.open ? "open" : "closed",
        "data-disabled": a ? "" : void 0,
        disabled: a,
        ...o,
        ref: d,
        onPointerDown: Y(t.onPointerDown, (p) => {
          !a && p.button === 0 && p.ctrlKey === !1 && (s.onOpenToggle(), s.open || p.preventDefault());
        }),
        onKeyDown: Y(t.onKeyDown, (p) => {
          a || (["Enter", " "].includes(p.key) && s.onOpenToggle(), p.key === "ArrowDown" && s.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(p.key) && p.preventDefault());
        })
      }
    ) });
  }, "DropdownMenuTrigger")
), Cu = /* @__PURE__ */ yt((e) => {
  const { __scopeDropdownMenu: t, ...n } = e, i = wt(t);
  return /* @__PURE__ */ r(fu, { ...i, ...n });
}, "DropdownMenuPortal"), Mu = "DropdownMenuContent", Nu = /* @__PURE__ */ b.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ yt(function(t, n) {
    const { __scopeDropdownMenu: i, ...a } = t, o = Ao(Mu, i), s = wt(i), c = b.useRef(!1);
    return /* @__PURE__ */ r(
      pu,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...s,
        ...a,
        ref: n,
        onCloseAutoFocus: Y(t.onCloseAutoFocus, (d) => {
          var p;
          c.current || (p = o.triggerRef.current) == null || p.focus(), c.current = !1, d.preventDefault();
        }),
        onInteractOutside: Y(t.onInteractOutside, (d) => {
          const p = d.detail.originalEvent, h = p.button === 0 && p.ctrlKey === !0, f = p.button === 2 || h;
          (!o.modal || f) && (c.current = !0);
        }),
        style: {
          ...t.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }, "DropdownMenuContent")
), Su = /* @__PURE__ */ b.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ yt(function(t, n) {
    const { __scopeDropdownMenu: i, ...a } = t, o = wt(i);
    return /* @__PURE__ */ r(mu, { ...o, ...a, ref: n });
  }, "DropdownMenuItem")
), Pu = /* @__PURE__ */ b.forwardRef(/* @__PURE__ */ yt(function(t, n) {
  const { __scopeDropdownMenu: i, ...a } = t, o = wt(i);
  return /* @__PURE__ */ r(vu, { ...o, ...a, ref: n });
}, "DropdownMenuSeparator")), Eu = wu, Ru = ku, Au = Cu, $u = Nu, Du = Su, Iu = Pu;
const Rr = Eu, Ar = Ru, yn = ft(({ className: e = "", sideOffset: t = 7, align: n = "start", container: i, ...a }, o) => /* @__PURE__ */ r(Au, { container: i, children: /* @__PURE__ */ r(
  $u,
  {
    ref: o,
    sideOffset: t,
    align: n,
    collisionPadding: 12,
    className: `menu-surface ${e}`,
    ...a
  }
) }));
yn.displayName = "DropdownMenuContent";
const Fe = ft(({ className: e = "", ...t }, n) => /* @__PURE__ */ r(Du, { ref: n, className: `menu-item ${e}`, ...t }));
Fe.displayName = "DropdownMenuItem";
function Mi() {
  return /* @__PURE__ */ r(Iu, { className: "menu-separator" });
}
function $o(e) {
  return Ln.toArray(e).flatMap((t) => _i(t) ? t.type === nn ? $o(t.props.children) : [{ value: String(t.props.value ?? Ln.toArray(t.props.children).join("")), label: t.props.children, disabled: t.props.disabled }] : []);
}
function $r({ value: e, defaultValue: t, onValueChange: n, children: i, required: a, disabled: o = !1, id: s, "aria-label": c }) {
  var w, x;
  const d = $o(i), [p, h] = H(String(t ?? ((w = d[0]) == null ? void 0 : w.value) ?? "")), [f, u] = H(!1), [g, m] = H(null), v = Z(null), y = String(e ?? p);
  return /* @__PURE__ */ l(q, { children: [
    /* @__PURE__ */ l(Rr, { onOpenChange: (k) => {
      var M;
      k && m(((M = v.current) == null ? void 0 : M.closest("dialog")) ?? null);
    }, children: [
      /* @__PURE__ */ r(Ar, { asChild: !0, children: /* @__PURE__ */ l("button", { ref: v, type: "button", id: s, disabled: o, "aria-label": c, "aria-required": a, "aria-invalid": f || void 0, className: "app-select", children: [
        /* @__PURE__ */ r("span", { children: ((x = d.find((k) => k.value === y)) == null ? void 0 : x.label) ?? "Sélectionner…" }),
        /* @__PURE__ */ r(Ue, { size: 12 })
      ] }) }),
      /* @__PURE__ */ r(yn, { container: g, className: "app-select-menu", align: "start", children: d.map((k) => /* @__PURE__ */ l(Fe, { role: "menuitemradio", "aria-checked": y === k.value, disabled: k.disabled, onSelect: () => {
        u(!1), h(k.value), n == null || n(k.value);
      }, children: [
        /* @__PURE__ */ r("span", { className: "app-select-check", children: y === k.value && /* @__PURE__ */ r(te, { size: 13 }) }),
        /* @__PURE__ */ r("span", { children: k.label })
      ] }, k.value)) })
    ] }),
    a && /* @__PURE__ */ r("input", { className: "app-select-validation", "aria-hidden": "true", tabIndex: -1, disabled: o, required: !0, value: y, onChange: () => {
    }, onInvalid: (k) => {
      var M;
      k.preventDefault(), (M = v.current) == null || M.focus(), u(!0);
    } })
  ] });
}
function Ni(e) {
  return e.replace(/[\s€]/g, "").replace(",", ".").replace(/[^\d.\-]/g, "");
}
function Tu(e) {
  const [t, ...n] = e.replace(",", ".").split(".");
  return t.replace(/\B(?=(\d{3})+(?!\d))/g, " ") + (n.length ? "," + n.join(".") : "");
}
function ve(e) {
  return `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`;
}
function Ou(e) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(e)) return null;
  const [t, n, i] = e.split("-").map(Number), a = new Date(t, n - 1, i, 12);
  return ve(a) === e ? a : null;
}
function Lu(e, t) {
  const n = new Date(e, t, 1, 12);
  return n.setDate(n.getDate() - (n.getDay() + 6) % 7), Array.from({ length: 42 }, (i, a) => new Date(n.getFullYear(), n.getMonth(), n.getDate() + a, 12));
}
function Jh({ value: e, onValueChange: t, ...n }) {
  const i = Z(null), a = Z(null), o = Tu(String(e));
  return tn(() => {
    if (a.current === null || !i.current) return;
    let s = 0, c = 0;
    for (; s < o.length && c < a.current; )
      o[s] !== " " && c++, s++;
    i.current.setSelectionRange(s, s), a.current = null;
  }, [o]), /* @__PURE__ */ r("input", { ...n, ref: i, type: "text", inputMode: "decimal", value: o, onChange: (s) => {
    const c = s.target.value;
    a.current = c.slice(0, s.target.selectionStart ?? c.length).replace(/[\s€]/g, "").length, t(Ni(c));
  }, onKeyDown: (s) => {
    var p;
    (p = n.onKeyDown) == null || p.call(n, s);
    const c = s.currentTarget, d = c.selectionStart ?? 0;
    if (s.key === "Backspace" && d === c.selectionEnd && /[\s]/.test(c.value[d - 1] ?? "")) {
      s.preventDefault();
      const h = c.value.slice(0, d - 2) + c.value.slice(d);
      a.current = c.value.slice(0, d - 2).replace(/\s/g, "").length, t(Ni(h));
    }
  } });
}
var _u = Object.defineProperty, qe = (e, t) => _u(e, "name", { value: t, configurable: !0 }), Dr = "Popover", [Do, Qh] = /* @__PURE__ */ Le(Dr, [
  hn
]), Ir = hn(), [Fu, xt] = Do(Dr), zu = /* @__PURE__ */ qe((e) => {
  const {
    __scopePopover: t,
    children: n,
    open: i,
    defaultOpen: a,
    onOpenChange: o,
    modal: s = !1
  } = e, c = Ir(t), d = b.useRef(null), [p, h] = b.useState(!1), [f, u] = et({
    prop: i,
    defaultProp: a ?? !1,
    onChange: o,
    caller: Dr
  });
  return /* @__PURE__ */ r(Wa, { ...c, children: /* @__PURE__ */ r(
    Fu,
    {
      scope: t,
      contentId: Nt(),
      triggerRef: d,
      open: f,
      onOpenChange: u,
      onOpenToggle: b.useCallback(() => u((g) => !g), [u]),
      hasCustomAnchor: p,
      onCustomAnchorAdd: b.useCallback(() => h(!0), []),
      onCustomAnchorRemove: b.useCallback(() => h(!1), []),
      modal: s,
      children: n
    }
  ) });
}, "Popover"), Bu = "PopoverTrigger", ju = /* @__PURE__ */ b.forwardRef(
  /* @__PURE__ */ qe(function(t, n) {
    const { __scopePopover: i, ...a } = t, o = xt(Bu, i), s = Ir(i), c = ee(n, o.triggerRef), d = /* @__PURE__ */ r(
      le.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.open ? o.contentId : void 0,
        "data-state": Tr(o.open),
        ...a,
        ref: c,
        onClick: Y(t.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? d : /* @__PURE__ */ r(Ha, { asChild: !0, ...s, children: d });
  }, "PopoverTrigger")
), Io = "PopoverPortal", [Vu, Wu] = Do(Io, {
  forceMount: void 0
}), Hu = /* @__PURE__ */ qe((e) => {
  const { __scopePopover: t, forceMount: n, children: i, container: a } = e, o = xt(Io, t);
  return /* @__PURE__ */ r(Vu, { scope: t, forceMount: n, children: /* @__PURE__ */ r(pn, { present: n || o.open, children: /* @__PURE__ */ r(Ua, { asChild: !0, container: a, children: i }) }) });
}, "PopoverPortal"), Et = "PopoverContent", Gu = /* @__PURE__ */ b.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ qe(function(t, n) {
    const i = Wu(Et, t.__scopePopover), { forceMount: a = i.forceMount, ...o } = t, s = xt(Et, t.__scopePopover);
    return /* @__PURE__ */ r(pn, { present: a || s.open, children: s.modal ? /* @__PURE__ */ r(Ku, { ...o, ref: n }) : /* @__PURE__ */ r(qu, { ...o, ref: n }) });
  }, "PopoverContent")
), Uu = /* @__PURE__ */ Ve("PopoverContent.RemoveScroll"), Ku = /* @__PURE__ */ b.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ qe(function(t, n) {
    const i = xt(Et, t.__scopePopover), a = b.useRef(null), o = ee(n, a), s = b.useRef(!1);
    return b.useEffect(() => {
      const c = a.current;
      if (c) return co(c);
    }, []), /* @__PURE__ */ r(Nr, { as: Uu, allowPinchZoom: !0, children: /* @__PURE__ */ r(
      To,
      {
        ...t,
        ref: o,
        trapFocus: i.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Y(t.onCloseAutoFocus, (c) => {
          var d;
          c.preventDefault(), s.current || (d = i.triggerRef.current) == null || d.focus();
        }),
        onPointerDownOutside: Y(
          t.onPointerDownOutside,
          (c) => {
            const d = c.detail.originalEvent, p = d.button === 0 && d.ctrlKey === !0, h = d.button === 2 || p;
            s.current = h;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: Y(
          t.onFocusOutside,
          (c) => c.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }, "PopoverContentModal")
), qu = /* @__PURE__ */ b.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ qe(function(t, n) {
    const i = xt(Et, t.__scopePopover), a = b.useRef(!1), o = b.useRef(!1);
    return /* @__PURE__ */ r(
      To,
      {
        ...t,
        ref: n,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (s) => {
          var c, d;
          (c = t.onCloseAutoFocus) == null || c.call(t, s), s.defaultPrevented || (a.current || (d = i.triggerRef.current) == null || d.focus(), s.preventDefault()), a.current = !1, o.current = !1;
        },
        onInteractOutside: (s) => {
          var p, h;
          (p = t.onInteractOutside) == null || p.call(t, s), s.defaultPrevented || (a.current = !0, s.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const c = s.target;
          ((h = i.triggerRef.current) == null ? void 0 : h.contains(c)) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && o.current && s.preventDefault();
        }
      }
    );
  }, "PopoverContentNonModal")
), To = /* @__PURE__ */ b.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ qe(function(t, n) {
    const {
      __scopePopover: i,
      trapFocus: a,
      onOpenAutoFocus: o,
      onCloseAutoFocus: s,
      disableOutsidePointerEvents: c,
      onEscapeKeyDown: d,
      onPointerDownOutside: p,
      onFocusOutside: h,
      onInteractOutside: f,
      ...u
    } = t, g = xt(Et, i), m = Ir(i);
    return on(), /* @__PURE__ */ r(
      ya,
      {
        asChild: !0,
        loop: !0,
        trapped: a,
        onMountAutoFocus: o,
        onUnmountAutoFocus: s,
        children: /* @__PURE__ */ r(
          va,
          {
            asChild: !0,
            disableOutsidePointerEvents: c,
            onInteractOutside: f,
            onEscapeKeyDown: d,
            onPointerDownOutside: p,
            onFocusOutside: h,
            onDismiss: () => g.onOpenChange(!1),
            deferPointerDownOutside: !0,
            children: /* @__PURE__ */ r(
              Ga,
              {
                "data-state": Tr(g.open),
                role: "dialog",
                id: g.contentId,
                ...m,
                ...u,
                ref: n,
                style: {
                  ...u.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              }
            )
          }
        )
      }
    );
  }, "PopoverContentImpl")
);
function Tr(e) {
  return e ? "open" : "closed";
}
qe(Tr, "getState");
var Yu = zu, Xu = ju, Zu = Hu, Ju = Gu;
const Tn = Array.from({ length: 12 }, (e, t) => new Date(2026, t, 1).toLocaleDateString("fr-FR", { month: "long" }));
function ef({ value: e, onValueChange: t, required: n, ...i }) {
  const a = /* @__PURE__ */ new Date(), o = Ou(e), s = o ?? a, [c, d] = H(!1), [p, h] = H(s), [f, u] = H(ve(s)), [g, m] = H("days"), [v, y] = H(!1), [w, x] = H(null), k = Z(null), M = Z(/* @__PURE__ */ new Map()), P = (E) => {
    y(!1), t(ve(E)), d(!1);
  }, S = (E) => {
    const T = new Date(a.getFullYear(), a.getMonth(), a.getDate() + E, 12);
    P(T);
  }, D = (E) => {
    const T = new Date(p.getFullYear() + (g === "months" ? E : 0), p.getMonth() + (g === "days" ? E : 0), 1, 12);
    h(T), u(ve(T));
  };
  return /* @__PURE__ */ l(q, { children: [
    /* @__PURE__ */ l(Yu, { open: c, onOpenChange: (E) => {
      var T;
      d(E), E && (x(((T = k.current) == null ? void 0 : T.closest("dialog")) ?? null), h(o ?? a), u(ve(o ?? a)), m("days"));
    }, children: [
      /* @__PURE__ */ r(Xu, { asChild: !0, children: /* @__PURE__ */ l("button", { ref: k, type: "button", className: "date-field", "aria-required": n, "aria-invalid": v || void 0, ...i, children: [
        /* @__PURE__ */ r(je, { size: 15 }),
        /* @__PURE__ */ r("span", { children: o ? o.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" }) : "Choisir une date" }),
        /* @__PURE__ */ r(be, { size: 13 })
      ] }) }),
      /* @__PURE__ */ r(Zu, { container: w, children: /* @__PURE__ */ l(Ju, { className: "date-picker", align: "start", sideOffset: 7, collisionPadding: 12, "aria-label": "Choisir une date", onOpenAutoFocus: (E) => {
        var T;
        E.preventDefault(), (T = M.current.get(ve(o ?? a))) == null || T.focus();
      }, children: [
        /* @__PURE__ */ l("div", { className: "date-picker-heading", children: [
          /* @__PURE__ */ r("span", { children: "CALENDRIER" }),
          /* @__PURE__ */ r("small", { children: o ? "Date sélectionnée" : "Planifier une date" })
        ] }),
        /* @__PURE__ */ l("div", { className: "date-picker-nav", children: [
          /* @__PURE__ */ r("button", { type: "button", "aria-label": g === "days" ? "Mois précédent" : "Année précédente", onClick: () => D(-1), children: /* @__PURE__ */ r(Wi, { size: 15 }) }),
          /* @__PURE__ */ l("button", { type: "button", className: "date-picker-period", onClick: () => m(g === "days" ? "months" : "days"), children: [
            g === "days" ? Tn[p.getMonth()] + " " : "",
            p.getFullYear()
          ] }),
          /* @__PURE__ */ r("button", { type: "button", "aria-label": g === "days" ? "Mois suivant" : "Année suivante", onClick: () => D(1), children: /* @__PURE__ */ r(be, { size: 15 }) })
        ] }),
        g === "months" ? /* @__PURE__ */ r("div", { className: "date-picker-months", children: Tn.map((E, T) => /* @__PURE__ */ l("button", { type: "button", onClick: () => {
          const R = new Date(p.getFullYear(), T, 1, 12);
          h(R), u(ve(R)), m("days");
        }, children: [
          E.slice(0, 3),
          "."
        ] }, E)) }) : /* @__PURE__ */ l(q, { children: [
          /* @__PURE__ */ r("div", { className: "date-picker-week", "aria-hidden": "true", children: ["L", "M", "M", "J", "V", "S", "D"].map((E, T) => /* @__PURE__ */ r("span", { children: E }, T)) }),
          /* @__PURE__ */ r("div", { className: "date-picker-grid", role: "grid", "aria-label": Tn[p.getMonth()] + " " + p.getFullYear(), children: Array.from({ length: Math.ceil(((new Date(p.getFullYear(), p.getMonth(), 1).getDay() + 6) % 7 + new Date(p.getFullYear(), p.getMonth() + 1, 0).getDate()) / 7) }, (E, T) => /* @__PURE__ */ r("div", { role: "row", children: Lu(p.getFullYear(), p.getMonth()).slice(T * 7, T * 7 + 7).map((R) => {
            const O = ve(R);
            return /* @__PURE__ */ r("div", { role: "gridcell", "aria-selected": O === e, children: /* @__PURE__ */ r("button", { type: "button", ref: (L) => {
              L ? M.current.set(O, L) : M.current.delete(O);
            }, tabIndex: O === f ? 0 : -1, className: `${R.getMonth() !== p.getMonth() ? "outside " : ""}${O === e ? "selected " : ""}${O === ve(a) ? "today" : ""}`, "aria-label": R.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long", year: "numeric" }), "aria-current": O === ve(a) ? "date" : void 0, onClick: () => P(R), onKeyDown: (L) => {
              const N = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7, Home: -(R.getDay() + 6) % 7, End: 6 - (R.getDay() + 6) % 7 }[L.key];
              if (N === void 0 && L.key !== "PageUp" && L.key !== "PageDown") return;
              L.preventDefault();
              const _ = new Date(R);
              N !== void 0 ? _.setDate(_.getDate() + N) : _.setMonth(_.getMonth() + (L.key === "PageUp" ? -1 : 1), 1);
              const j = ve(_);
              h(_), u(j), requestAnimationFrame(() => {
                var G;
                return (G = M.current.get(j)) == null ? void 0 : G.focus();
              });
            }, children: R.getDate() }) }, O);
          }) }, T)) })
        ] }),
        /* @__PURE__ */ l("div", { className: "date-picker-shortcuts", children: [
          /* @__PURE__ */ r("button", { type: "button", onClick: () => S(0), children: "Aujourd’hui" }),
          /* @__PURE__ */ r("button", { type: "button", onClick: () => S(1), children: "Demain" }),
          /* @__PURE__ */ r("button", { type: "button", onClick: () => S(7), children: "Dans 7 jours" })
        ] }),
        !n && e && /* @__PURE__ */ r("div", { className: "date-picker-footer", children: /* @__PURE__ */ r("button", { type: "button", onClick: () => {
          t(""), d(!1);
        }, children: "Effacer la date" }) })
      ] }) })
    ] }),
    n && /* @__PURE__ */ r("input", { className: "date-validation", "aria-hidden": "true", tabIndex: -1, required: !0, value: o ? e : "", onChange: () => {
    }, onInvalid: (E) => {
      var T;
      E.preventDefault(), y(!0), (T = k.current) == null || T.focus();
    } })
  ] });
}
function Qu(e, t) {
  const n = e.flatMap((s, c) => Array.from({ length: s }, () => c)), i = t.map((s) => n[s]).filter((s) => s !== void 0), a = /* @__PURE__ */ new Set(), o = [];
  for (let s = 0; s < i.length; ) {
    const c = i[s];
    let d = 1;
    for (; i[s + d] === c; ) d++;
    o.push({ owner: c, span: d, show: !a.has(c) }), a.add(c), s += d;
  }
  return o;
}
function Oo(e, t, n) {
  const i = typeof e == "number" && typeof t == "number" ? e - t : String(e).localeCompare(String(t), "fr", { numeric: !0 });
  return n === "asc" ? i : n === "desc" ? -i : 0;
}
function ht(e) {
  if (typeof e == "string" || typeof e == "number") return String(e);
  if (Array.isArray(e)) return e.map(ht).filter(Boolean).join(" ");
  if (!e || typeof e != "object" || !e.props || e.props["aria-hidden"]) return "";
  const t = e.props;
  return ["title", "subtitle", "name", "label", "value", "detail", "children"].map((n) => ht(t[n])).filter(Boolean).join(" ");
}
function eh(e, t = "", n = {}, i = { column: -1, direction: null }, a = 0) {
  const o = (d) => String(d).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase().trim(), s = e.filter((d) => o(d.searchText ?? d.cells.map(ht).join(" ")).includes(o(t)) && Object.entries(n).every(([p, h]) => o(ht(d.cells[Number(p) - a])).includes(o(h))));
  if (!i.direction) return s;
  const c = (d) => {
    var h;
    if (typeof ((h = d == null ? void 0 : d.props) == null ? void 0 : h.value) == "number") return d.props.value;
    const p = ht(d).trim();
    return /^-?\d+(\.\d+)?%?$/.test(p) ? Number(p.replace("%", "")) : p;
  };
  return s.sort((d, p) => Oo(c(d.cells[i.column - a]), c(p.cells[i.column - a]), i.direction));
}
function th(e, t, n) {
  const i = e.indexOf(t);
  if (i < 0 || !["first", "last", "left", "right"].includes(n))
    return e;
  const a = n === "first" ? 0 : n === "last" ? e.length - 1 : i + (n === "left" ? -1 : 1);
  if (a < 0 || a >= e.length || a === i)
    return e;
  const o = [...e];
  return o.splice(i, 1), o.splice(a, 0, t), o;
}
const Or = 120, Lr = 520;
function Lo(e) {
  return Math.round(
    Math.max(Or, Math.min(Lr, e))
  );
}
function nh(e, t, n = !1) {
  return t === "Home" ? Or : t === "End" ? Lr : t !== "ArrowLeft" && t !== "ArrowRight" ? null : Lo(
    e + (t === "ArrowLeft" ? -1 : 1) * (n ? 40 : 10)
  );
}
const _o = Qo(null);
function ge(e) {
  return Ln.toArray(e).flatMap((t) => _i(t) ? t.type === nn ? ge(t.props.children) : [t] : []);
}
const tr = ht;
function Si(e) {
  if (e.props["data-sort-value"] !== void 0) return e.props["data-sort-value"];
  const t = tr(e.props.children).trim(), n = t.replace(/[\s€%]/g, "").replace(",", ".");
  return n && /^-?\d+(\.\d+)?$/.test(n) ? Number(n) : t;
}
function ct({ children: e, ...t }) {
  const n = es(_o), i = ge(e);
  if (!n) return /* @__PURE__ */ r("tr", { ...t, children: e });
  const a = Qu(i.map((o) => o.props.colSpan ?? 1), n).map(({ owner: o, span: s, show: c }, d) => _n(i[o], { key: o + "-" + d, colSpan: s, children: c ? i[o].props.children : null }));
  return /* @__PURE__ */ r("tr", { ...t, children: a });
}
function _r({ children: e, sort: t, onSortChange: n, filters: i, onFiltersChange: a, sortable: o = !0, locale: s = "fr", ...c }) {
  const d = { "Menu de colonne": "Column menu", Redimensionner: "Resize", "Tri croissant": "Sort ascending", "Tri décroissant": "Sort descending", "Sans tri": "No sorting", "Déplacer à gauche": "Move left", "Déplacer à droite": "Move right", "Déplacer au début": "Move first", "Déplacer à la fin": "Move last" }, p = (C) => s === "en" ? d[C] ?? C : C, h = ge(e), f = h.find((C) => C.type === "thead"), u = ge(f == null ? void 0 : f.props.children)[0], g = ge(u == null ? void 0 : u.props.children), [m, v] = H(g.map((C, I) => String(I))), [y, w] = H({}), [x, k] = H({ column: -1, direction: null }), [M, P] = H({}), S = i ?? M, D = (C) => {
    P(C), a == null || a(C);
  }, E = t ?? x, T = (C) => {
    k(C), n == null || n(C);
  }, R = Z(null), O = Z(null), L = m, N = () => {
    var C;
    return Object.fromEntries(Array.from(((C = R.current) == null ? void 0 : C.querySelectorAll("thead th")) ?? []).map((I, z) => [L[z], I.getBoundingClientRect().width]));
  }, _ = (C) => {
    var I, z;
    return ge((I = g[Number(C)]) == null ? void 0 : I.props.children).some((A) => A.type === "input") ? "" : tr((z = g[Number(C)]) == null ? void 0 : z.props.children).trim();
  }, j = [["left", "Déplacer à gauche", zi], ["right", "Déplacer à droite", Bi], ["first", "Déplacer au début", ss], ["last", "Déplacer à la fin", cs]], G = (C) => {
    const I = ge(C).filter((V) => a || Object.entries(S).every(([B, F]) => {
      var X;
      return tr((X = ge(V.props.children)[Number(B)]) == null ? void 0 : X.props.children).toLocaleLowerCase().includes(F.toLocaleLowerCase());
    }));
    if (n || !E.direction || !o) return I;
    const z = [];
    let A = [];
    const $ = () => {
      A.sort((V, B) => {
        const F = ge(V.props.children)[E.column], X = ge(B.props.children)[E.column];
        if (!F || !X) return 0;
        const K = Si(F), he = Si(X);
        return Oo(K, he, E.direction);
      }), z.push(...A), A = [];
    };
    for (const V of I)
      ge(V.props.children).some((B) => (B.props.colSpan ?? 1) > 1) ? ($(), z.push(V)) : A.push(V);
    return $(), z;
  };
  return /* @__PURE__ */ l("div", { className: "shared-table", children: [
    Object.entries(S).filter(([, C]) => C).length > 0 && /* @__PURE__ */ r("div", { className: "shared-table-filters", "aria-label": s === "en" ? "Active filters" : "Filtres actifs", children: Object.entries(S).filter(([, C]) => C).map(([C, I]) => /* @__PURE__ */ l("button", { type: "button", onClick: () => {
      const z = { ...S };
      delete z[C], D(z);
    }, "aria-label": `${s === "en" ? "Clear filter" : "Effacer le filtre"} ${_(C)}`, children: [
      _(C),
      ": ",
      I,
      " ×"
    ] }, C)) }),
    /* @__PURE__ */ r(_o.Provider, { value: L.map(Number), children: /* @__PURE__ */ l("table", { ...c, ref: R, className: `shared-data-table ${c.className ?? ""}`, style: { ...c.style, ...Object.keys(y).length ? { tableLayout: "fixed", width: L.reduce((C, I) => C + (y[I] ?? 160), 0), minWidth: 0 } : {} }, children: [
      /* @__PURE__ */ r("colgroup", { children: L.map((C) => /* @__PURE__ */ r("col", { style: { width: y[C] } }, C)) }),
      h.map((C, I) => C.type === "thead" ? /* @__PURE__ */ r("thead", { children: /* @__PURE__ */ r("tr", { children: L.map((z, A) => {
        const $ = _(z), V = E.column === Number(z) && E.direction;
        return /* @__PURE__ */ r("th", { scope: "col", "aria-sort": V ? V === "asc" ? "ascending" : "descending" : void 0, className: `${$ ? "shared-column" : "selection-cell"} ${g[Number(z)].props.className ?? ""}`, children: $ ? /* @__PURE__ */ l(q, { children: [
          /* @__PURE__ */ l(Rr, { children: [
            /* @__PURE__ */ l(Ar, { className: "shared-column-trigger", "aria-label": `${p("Menu de colonne")} ${$}`, children: [
              g[Number(z)].props.children,
              V === "asc" ? /* @__PURE__ */ r(qt, { size: 12 }) : V === "desc" ? /* @__PURE__ */ r(Kt, { size: 12 }) : /* @__PURE__ */ r(Ue, { size: 11 })
            ] }),
            /* @__PURE__ */ l(yn, { align: "start", children: [
              /* @__PURE__ */ r("div", { className: "menu-caption", children: $ }),
              /* @__PURE__ */ l("label", { className: "shared-column-filter", children: [
                s === "en" ? "Filter values" : "Filtrer les valeurs",
                /* @__PURE__ */ r("input", { "aria-label": `${s === "en" ? "Filter" : "Filtrer"} ${$}`, placeholder: s === "en" ? "Contains…" : "Contient…", value: S[z] ?? "", onKeyDown: (B) => {
                  B.key !== "Escape" && B.key !== "Tab" && B.stopPropagation();
                }, onChange: (B) => D({ ...S, [z]: B.target.value }) })
              ] }),
              /* @__PURE__ */ r(Mi, {}),
              o && /* @__PURE__ */ l(q, { children: [
                [["asc", "Tri croissant", qt], ["desc", "Tri décroissant", Kt], [null, "Sans tri", Ps]].map(([B, F, X]) => /* @__PURE__ */ l(Fe, { role: "menuitemradio", "aria-checked": B === null ? !E.direction : V === B, onSelect: () => T({ column: Number(z), direction: B }), children: [
                  /* @__PURE__ */ r(X, { size: 14 }),
                  p(F),
                  (B === null ? !E.direction : V === B) && /* @__PURE__ */ r(te, { size: 12, className: "trailing" })
                ] }, F)),
                /* @__PURE__ */ r(Mi, {})
              ] }),
              j.map(([B, F, X]) => /* @__PURE__ */ l(Fe, { disabled: B === "first" || B === "left" ? A === 0 : A === L.length - 1, onSelect: () => v([...th(L, z, B)]), children: [
                /* @__PURE__ */ r(X, { size: 14 }),
                p(F)
              ] }, B))
            ] })
          ] }),
          /* @__PURE__ */ r("div", { role: "separator", tabIndex: 0, "aria-label": `${p("Redimensionner")} ${$}`, "aria-orientation": "vertical", "aria-valuemin": Or, "aria-valuemax": Lr, "aria-valuenow": Math.round(y[z] ?? 160), className: "shared-column-resize", onPointerDown: (B) => {
            if (B.button !== 0) return;
            B.preventDefault();
            const F = N();
            O.current = { id: z, x: B.clientX, width: F[z], before: y }, w({ ...y, ...F }), B.currentTarget.setPointerCapture(B.pointerId), B.currentTarget.focus();
          }, onPointerMove: (B) => {
            O.current && w((F) => ({ ...F, [z]: Lo(O.current.width + B.clientX - O.current.x) }));
          }, onPointerUp: () => {
            O.current = null;
          }, onPointerCancel: () => {
            O.current && w(O.current.before), O.current = null;
          }, onLostPointerCapture: () => {
            O.current = null;
          }, onDoubleClick: () => w((B) => ({ ...B, [z]: 160 })), onKeyDown: (B) => {
            if (B.key === "Escape" && O.current) {
              w(O.current.before), O.current = null;
              return;
            }
            const F = N(), X = nh(F[z], B.key, B.shiftKey);
            X !== null && (B.preventDefault(), w({ ...y, ...F, [z]: X }));
          } })
        ] }) : g[Number(z)].props.children }, z);
      }) }) }, I) : C.type === "tbody" ? _n(C, { key: I, children: G(C.props.children) }) : C.type === "colgroup" ? null : _n(C, { key: I }))
    ] }) })
  ] });
}
const rh = {
  pending: { label: "En attente", icon: Ze },
  progress: { label: "En cours", icon: ar },
  submitted: { label: "Envoyé", icon: Yi },
  review: { label: "En revue", icon: Ss },
  success: { label: "Terminé", icon: Hi },
  failed: { label: "Échec", icon: hs },
  expired: { label: "Expiré", icon: ir }
};
function De({
  status: e,
  label: t
}) {
  const { icon: n, label: i } = rh[e];
  return /* @__PURE__ */ l("span", { className: `status-badge ${e}`, children: [
    /* @__PURE__ */ r(n, { size: 14, strokeWidth: 1.8 }),
    t ?? i
  ] });
}
function ih({ state: e, icon: t, text: n }) {
  const i = pt();
  return /* @__PURE__ */ r("span", { className: "ac-action-label", children: /* @__PURE__ */ r(lt, { mode: "wait", initial: !1, children: /* @__PURE__ */ l(re.span, { initial: { opacity: 0, y: i ? 0 : 5 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: i ? 0 : -4 }, transition: { duration: i ? 0 : Fn.feedback }, children: [
    t,
    /* @__PURE__ */ r("span", { children: n })
  ] }, e) }) });
}
function tf({ title: e, description: t, action: n, children: i }) {
  return /* @__PURE__ */ l("div", { className: "bm-page", children: [
    /* @__PURE__ */ l("header", { className: "bm-page-heading", children: [
      /* @__PURE__ */ l("div", { children: [
        /* @__PURE__ */ r("h1", { children: e }),
        t && /* @__PURE__ */ r("p", { children: t })
      ] }),
      n
    ] }),
    /* @__PURE__ */ r("div", { className: "bm-stack", children: i })
  ] });
}
function Fo({ children: e, columns: t = 2, ratio: n }) {
  return /* @__PURE__ */ r("div", { className: "bm-grid", "data-ratio": n, style: { "--columns": t }, children: e });
}
function en({ children: e }) {
  return /* @__PURE__ */ r("div", { className: "bm-stack", children: e });
}
function nf({ label: e, value: t, options: n, onChange: i, labels: a = {} }) {
  return /* @__PURE__ */ l("div", { className: "bm-field", children: [
    /* @__PURE__ */ r("span", { children: e }),
    /* @__PURE__ */ r($r, { value: t, onValueChange: i, "aria-label": e, children: n.map((o) => /* @__PURE__ */ r("option", { value: o, children: a[o] ?? o }, o)) })
  ] });
}
function Fr({ items: e }) {
  return /* @__PURE__ */ r("dl", { className: "bm-key-values", children: e.map((t) => /* @__PURE__ */ l("div", { children: [
    /* @__PURE__ */ r("dt", { children: t.label }),
    /* @__PURE__ */ r("dd", { children: t.value })
  ] }, t.label)) });
}
function zo({ children: e, error: t = !1 }) {
  return /* @__PURE__ */ r("p", { className: "bm-notice", role: t ? "alert" : "status", "data-error": t, children: e });
}
function rf({ items: e, onSelect: t }) {
  return /* @__PURE__ */ r(Fo, { children: e.map((n) => /* @__PURE__ */ l(U, { className: "bm-choice-card", onClick: () => t(n.id), children: [
    /* @__PURE__ */ r("strong", { children: n.title }),
    n.description && /* @__PURE__ */ r("span", { children: n.description })
  ] }, n.id)) });
}
function af({ page: e, totalPages: t, onChange: n, label: i = "Page" }) {
  return /* @__PURE__ */ l("div", { className: "bm-row", children: [
    /* @__PURE__ */ r(U, { "aria-label": "Previous page", disabled: e <= 1, onClick: () => n(e - 1), children: "←" }),
    /* @__PURE__ */ l("span", { children: [
      i,
      " ",
      e,
      " / ",
      Math.max(1, t)
    ] }),
    /* @__PURE__ */ r(U, { "aria-label": "Next page", disabled: e >= t, onClick: () => n(e + 1), children: "→" })
  ] });
}
function of({ rows: e, series: t, unit: n = "", selected: i, onSelect: a }) {
  const o = Math.max(1, ...e.flatMap((d) => d.values.map(Math.abs))), [s, c] = H(null);
  return /* @__PURE__ */ l("div", { className: "bm-bar-chart", children: [
    /* @__PURE__ */ r("div", { className: "bm-chart-legend", children: t.map((d, p) => /* @__PURE__ */ l("span", { children: [
      /* @__PURE__ */ r("i", { "data-series": p }),
      d
    ] }, d)) }),
    e.map((d) => /* @__PURE__ */ l("div", { className: "bm-chart-row", "data-selected": i === d.id, children: [
      /* @__PURE__ */ r(U, { variant: "ghost", disabled: !a, onClick: () => a == null ? void 0 : a(d.id), children: d.label }),
      /* @__PURE__ */ r("div", { className: "bm-chart-bars", children: d.values.map((p, h) => /* @__PURE__ */ l("div", { className: "bm-chart-track", children: [
        /* @__PURE__ */ r("div", { className: "bm-chart-bar", "data-series": h, "data-active": s === d.id + ":" + h, tabIndex: 0, role: "img", "aria-label": `${d.label}, ${t[h]}: ${p}${n}`, onMouseEnter: () => c(d.id + ":" + h), onMouseLeave: () => c(null), onFocus: () => c(d.id + ":" + h), onBlur: () => c(null), style: { width: `${Math.abs(p) / o * 100}%` } }),
        /* @__PURE__ */ l("span", { children: [
          p.toLocaleString("en-CA", { maximumFractionDigits: 1 }),
          n
        ] })
      ] }, h)) }),
      d.detail && /* @__PURE__ */ r("small", { children: d.detail })
    ] }, d.id))
  ] });
}
function sf({ rows: e, unit: t = "", onSelect: n, selected: i }) {
  const a = Math.min(0, ...e.map((c) => c.low)), o = Math.max(1, ...e.map((c) => c.high)), s = (c) => (c - a) / (o - a) * 100;
  return /* @__PURE__ */ r("div", { className: "bm-range-chart", children: e.map((c) => /* @__PURE__ */ l("div", { className: "bm-chart-row", "data-selected": i === c.id, children: [
    /* @__PURE__ */ r(U, { variant: "ghost", disabled: !n, onClick: () => n == null ? void 0 : n(c.id), children: c.label }),
    /* @__PURE__ */ l("div", { className: "bm-range-track", role: "img", tabIndex: 0, "aria-label": `${c.label}: ${c.low}${t} to ${c.high}${t}, median ${c.median}${t}`, children: [
      /* @__PURE__ */ r("i", { style: { left: `${s(c.low)}%`, width: `${s(c.high) - s(c.low)}%` } }),
      /* @__PURE__ */ r("b", { style: { left: `${s(c.median)}%` } })
    ] }),
    /* @__PURE__ */ l("span", { children: [
      c.median.toFixed(1),
      t
    ] }),
    /* @__PURE__ */ r("small", { children: c.detail ?? `${c.low.toFixed(1)}–${c.high.toFixed(1)}${t}` })
  ] }, c.id)) });
}
function cf({ columns: e, rows: t }) {
  return /* @__PURE__ */ l(_r, { locale: "en", children: [
    /* @__PURE__ */ r("thead", { children: /* @__PURE__ */ l("tr", { children: [
      /* @__PURE__ */ r("th", { children: "Item" }),
      e.map((n) => /* @__PURE__ */ r("th", { children: n }, n))
    ] }) }),
    /* @__PURE__ */ r("tbody", { children: t.map((n) => /* @__PURE__ */ l(ct, { children: [
      /* @__PURE__ */ r("td", { children: n.label }),
      n.cells.map((i, a) => /* @__PURE__ */ r("td", { children: /* @__PURE__ */ r("span", { className: "bm-matrix-cell", "data-tone": i.tone, children: i.label }) }, a))
    ] }, n.id)) })
  ] });
}
function lf({ nodes: e, links: t }) {
  var g;
  const [n, i] = H(""), [a, o] = H("All types"), [s, c] = H((g = [...e].sort((m, v) => t.filter((y) => y.source === v.id || y.target === v.id).length - t.filter((y) => y.source === m.id || y.target === m.id).length)[0]) == null ? void 0 : g.id), d = e.find((m) => m.id === s), p = e.filter((m) => (a === "All types" || m.kind === a) && `${m.label} ${m.description ?? ""}`.toLowerCase().includes(n.toLowerCase())), h = t.filter((m) => m.source === s || m.target === s).map((m) => ({ link: m, node: e.find((v) => v.id === (m.source === s ? m.target : m.source)) })).filter((m) => m.node), f = [...new Map(h.map((m) => [m.node.id, m.node])).values()].slice(0, 12), u = f.map((m, v) => ({ node: m, x: 320 + 230 * Math.cos(v / f.length * Math.PI * 2), y: 180 + 120 * Math.sin(v / f.length * Math.PI * 2) }));
  return /* @__PURE__ */ l("div", { className: "bm-network-explorer", children: [
    /* @__PURE__ */ l("div", { className: "bm-network-browser", children: [
      /* @__PURE__ */ l(Fo, { children: [
        /* @__PURE__ */ r(lr, { "aria-label": "Search network", placeholder: "Search entities…", value: n, onChange: (m) => i(m.target.value) }),
        /* @__PURE__ */ r($r, { "aria-label": "Entity type", value: a, onValueChange: o, children: ["All types", ...new Set(e.map((m) => m.kind))].map((m) => /* @__PURE__ */ r("option", { children: m }, m)) })
      ] }),
      /* @__PURE__ */ l(zo, { children: [
        e.length,
        " entities · ",
        t.length,
        " relationships · ",
        p.length,
        " matches"
      ] }),
      /* @__PURE__ */ l("div", { className: "bm-network-list", children: [
        p.map((m) => /* @__PURE__ */ r(U, { variant: m.id === s ? "primary" : "ghost", onClick: () => c(m.id), children: m.label }, m.id)),
        !p.length && /* @__PURE__ */ r(Zi, { title: "No matching entity", description: "Try another search or entity type." })
      ] })
    ] }),
    /* @__PURE__ */ l("div", { className: "bm-network-inspector", children: [
      /* @__PURE__ */ l("svg", { className: "bm-network-map", viewBox: "0 0 640 360", role: "group", "aria-label": "Selected entity relationships", children: [
        u.map(({ node: m, x: v, y }) => /* @__PURE__ */ r("line", { x1: 320, y1: 180, x2: v, y2: y }, m.id)),
        /* @__PURE__ */ l("g", { children: [
          /* @__PURE__ */ r("circle", { cx: 320, cy: 180, r: 22 }),
          /* @__PURE__ */ r("text", { x: 320, y: 220, textAnchor: "middle", children: d == null ? void 0 : d.label })
        ] }),
        u.map(({ node: m, x: v, y }) => /* @__PURE__ */ l("g", { role: "button", tabIndex: 0, "aria-label": `Explore ${m.label}`, onClick: () => c(m.id), onKeyDown: (w) => {
          (w.key === "Enter" || w.key === " ") && (w.preventDefault(), c(m.id));
        }, children: [
          /* @__PURE__ */ r("circle", { cx: v, cy: y, r: 9 }),
          /* @__PURE__ */ r("text", { x: v, y: y + 24, textAnchor: "middle", children: m.label.length > 24 ? m.label.slice(0, 22) + "…" : m.label })
        ] }, m.id))
      ] }),
      /* @__PURE__ */ l($t, { children: [
        /* @__PURE__ */ r(cr, { title: (d == null ? void 0 : d.label) ?? "Select an entity", description: d == null ? void 0 : d.description }),
        /* @__PURE__ */ r(Fr, { items: [{ label: "Type", value: d == null ? void 0 : d.kind }, ...d != null && d.metric ? [{ label: "Signal", value: d.metric }] : []] }),
        /* @__PURE__ */ r("div", { className: "bm-network-links", children: h.map(({ node: m, link: v }, y) => /* @__PURE__ */ l(U, { onClick: () => c(m.id), children: [
          /* @__PURE__ */ r("small", { children: v.relation }),
          m.label,
          " →"
        ] }, y)) })
      ] })
    ] })
  ] });
}
function Bo({ children: e }) {
  return /* @__PURE__ */ r("div", { className: "bm-row", children: e });
}
function df({ items: e, value: t, onChange: n, label: i = "Sections" }) {
  return /* @__PURE__ */ r("nav", { className: "bm-section-nav", "aria-label": i, children: e.map((a) => /* @__PURE__ */ l(U, { variant: "ghost", "aria-current": a.id === t ? "page" : void 0, onClick: () => n(a.id), children: [
    a.label,
    a.count !== void 0 && /* @__PURE__ */ r("small", { children: a.count })
  ] }, a.id)) });
}
function uf({ title: e, description: t, meta: n, status: i = "Open", action: a, children: o }) {
  return /* @__PURE__ */ l("article", { className: "bm-work-card", children: [
    /* @__PURE__ */ r("span", { className: "bm-work-icon", children: /* @__PURE__ */ r(ir, { size: 16 }) }),
    /* @__PURE__ */ l("div", { children: [
      /* @__PURE__ */ r("small", { children: n }),
      /* @__PURE__ */ r("h3", { children: e }),
      t && /* @__PURE__ */ r("p", { children: t }),
      o
    ] }),
    /* @__PURE__ */ l("div", { className: "bm-work-actions", children: [
      /* @__PURE__ */ r(De, { status: i === "Done" ? "success" : "review", label: i }),
      a
    ] })
  ] });
}
function Pi(e) {
  const t = e.split(/\s*·\s*/, 2);
  return t.length === 2 ? { day: t[0], time: t[1] } : { day: "Activity", time: e };
}
function ah(e) {
  return typeof e == "string" && e.split(/\s+|\s*·\s*/).filter(Boolean).slice(0, 2).map((t) => t[0]).join("").toUpperCase() || "DA";
}
function Ei({ items: e }) {
  if (!e.length) return /* @__PURE__ */ r(Zi, { title: "No activity yet", description: "Actions on this dossier will appear here." });
  const t = e.reduce((n, i) => {
    const a = Pi(i.date).day, o = n.at(-1);
    return (o == null ? void 0 : o.day) === a ? o.items.push(i) : n.push({ day: a, items: [i] }), n;
  }, []);
  return /* @__PURE__ */ r("div", { className: "bm-activity-groups", children: t.map((n) => /* @__PURE__ */ l("section", { className: "bm-activity-group", children: [
    /* @__PURE__ */ r("header", { children: /* @__PURE__ */ r("h3", { children: n.day }) }),
    /* @__PURE__ */ r("ol", { className: "bm-activity-timeline", children: n.items.map((i) => {
      const a = Pi(i.date);
      return /* @__PURE__ */ l("li", { children: [
        /* @__PURE__ */ r("time", { children: a.time }),
        /* @__PURE__ */ r("span", { className: "bm-activity-node", "aria-hidden": "true", children: /* @__PURE__ */ r(Ne, { size: 14 }) }),
        /* @__PURE__ */ l("article", { className: "bm-activity-card", children: [
          /* @__PURE__ */ l("header", { children: [
            /* @__PURE__ */ r("strong", { children: i.title }),
            i.status && /* @__PURE__ */ r("span", { className: "bm-activity-status", "data-tone": i.tone ?? "neutral", children: i.status }),
            i.action
          ] }),
          i.detail && /* @__PURE__ */ r("p", { children: i.detail }),
          (i.actor || i.context || i.source) && /* @__PURE__ */ l("footer", { children: [
            i.actor && /* @__PURE__ */ l("span", { className: "bm-activity-actor", children: [
              i.avatarSrc ? /* @__PURE__ */ r("img", { src: i.avatarSrc, alt: "" }) : /* @__PURE__ */ r("i", { "aria-hidden": "true", children: ah(i.actor) }),
              i.actor
            ] }),
            i.context && /* @__PURE__ */ r("span", { children: i.context }),
            i.source && /* @__PURE__ */ r("span", { children: i.source })
          ] })
        ] })
      ] }, i.id);
    }) })
  ] }, n.day)) });
}
function hf({ steps: e, label: t = "Buyer readiness" }) {
  return /* @__PURE__ */ l("section", { className: "bm-readiness", "aria-label": t, children: [
    /* @__PURE__ */ r("span", { className: "bm-readiness-label", children: t }),
    /* @__PURE__ */ r("ol", { style: { gridTemplateColumns: `repeat(${Math.max(1, e.length)}, minmax(0, 1fr))` }, children: e.map((n, i) => /* @__PURE__ */ l("li", { "data-tone": n.tone ?? "neutral", children: [
      /* @__PURE__ */ r("span", { className: "bm-readiness-icon", "aria-hidden": "true", children: n.tone === "success" ? /* @__PURE__ */ r(te, { size: 15 }) : /* @__PURE__ */ r(Ne, { size: 15 }) }),
      /* @__PURE__ */ l("div", { children: [
        /* @__PURE__ */ r("strong", { children: n.label }),
        /* @__PURE__ */ r(De, { status: n.tone === "success" ? "success" : n.tone === "danger" ? "failed" : n.tone === "review" ? "review" : "progress", label: n.status }),
        n.detail && /* @__PURE__ */ r("small", { children: n.detail })
      ] })
    ] }, `${n.label}-${i}`)) })
  ] });
}
function ff({ steps: e, title: t = "Buyer journey", description: n }) {
  return /* @__PURE__ */ l("section", { className: "bm-buyer-journey", children: [
    /* @__PURE__ */ l("header", { children: [
      /* @__PURE__ */ r("h3", { children: t }),
      n && /* @__PURE__ */ r("p", { children: n })
    ] }),
    /* @__PURE__ */ r("ol", { children: e.map((i, a) => /* @__PURE__ */ l("li", { "data-state": i.state, children: [
      /* @__PURE__ */ r("div", { className: "bm-journey-track", children: /* @__PURE__ */ r("span", { className: "bm-journey-node", "aria-hidden": "true", children: i.state === "done" ? /* @__PURE__ */ r(te, { size: 14 }) : i.state === "blocked" ? /* @__PURE__ */ r(Ze, { size: 14 }) : /* @__PURE__ */ r(rn, { size: 14 }) }) }),
      /* @__PURE__ */ r("strong", { children: i.label }),
      i.detail && /* @__PURE__ */ r("small", { children: i.detail })
    ] }, `${i.label}-${a}`)) })
  ] });
}
function pf({ items: e, title: t = "Readiness checklist" }) {
  const n = e.filter((i) => i.state === "done").length;
  return /* @__PURE__ */ l("section", { className: "bm-readiness-checklist", children: [
    /* @__PURE__ */ l("header", { children: [
      /* @__PURE__ */ l("div", { children: [
        /* @__PURE__ */ r("h3", { children: t }),
        /* @__PURE__ */ l("span", { children: [
          n,
          " / ",
          e.length,
          " complete"
        ] })
      ] }),
      /* @__PURE__ */ r("div", { className: "bm-checklist-progress", role: "progressbar", "aria-valuemin": 0, "aria-valuemax": e.length, "aria-valuenow": n, children: /* @__PURE__ */ r("i", { style: { width: `${e.length ? n / e.length * 100 : 0}%` } }) })
    ] }),
    /* @__PURE__ */ r("ol", { children: e.map((i) => /* @__PURE__ */ l("li", { "data-state": i.state, children: [
      /* @__PURE__ */ r("span", { className: "bm-checklist-mark", "aria-hidden": "true", children: i.state === "done" && /* @__PURE__ */ r(te, { size: 14 }) }),
      /* @__PURE__ */ l("div", { children: [
        /* @__PURE__ */ r("strong", { children: i.label }),
        i.detail && /* @__PURE__ */ r("small", { children: i.detail })
      ] }),
      /* @__PURE__ */ r(De, { status: i.state === "done" ? "success" : i.state === "open" ? "review" : "progress", label: i.status })
    ] }, i.id)) })
  ] });
}
function mf({ included: e, restricted: t, title: n = "Access boundary", description: i = "Prepared scope", status: a = "Awaiting approval" }) {
  return /* @__PURE__ */ l("section", { className: "bm-access-boundary", children: [
    /* @__PURE__ */ l("header", { children: [
      /* @__PURE__ */ l("div", { children: [
        /* @__PURE__ */ r("h3", { children: n }),
        /* @__PURE__ */ r("p", { children: i })
      ] }),
      /* @__PURE__ */ r(De, { status: "review", label: a })
    ] }),
    /* @__PURE__ */ l("div", { className: "bm-access-boundary-groups", children: [
      /* @__PURE__ */ l("section", { "data-tone": "included", children: [
        /* @__PURE__ */ l("header", { children: [
          /* @__PURE__ */ r("h4", { children: "Included in draft" }),
          /* @__PURE__ */ r("p", { children: "These folders are prepared for approval." })
        ] }),
        /* @__PURE__ */ r("ul", { children: e.map((o) => /* @__PURE__ */ l("li", { children: [
          /* @__PURE__ */ r(ys, { size: 18 }),
          /* @__PURE__ */ l("div", { children: [
            /* @__PURE__ */ r("strong", { children: o.label }),
            o.detail && /* @__PURE__ */ r("small", { children: o.detail })
          ] }),
          /* @__PURE__ */ r(De, { status: "success", label: o.status ?? "Prepared" })
        ] }, o.id)) })
      ] }),
      /* @__PURE__ */ l("section", { "data-tone": "restricted", children: [
        /* @__PURE__ */ l("header", { children: [
          /* @__PURE__ */ r("h4", { children: "Restricted" }),
          /* @__PURE__ */ r("p", { children: "These folders are not included in the prepared request." })
        ] }),
        /* @__PURE__ */ r("ul", { children: t.map((o) => /* @__PURE__ */ l("li", { children: [
          /* @__PURE__ */ r(Ki, { size: 18 }),
          /* @__PURE__ */ l("div", { children: [
            /* @__PURE__ */ r("strong", { children: o.label }),
            o.detail && /* @__PURE__ */ r("small", { children: o.detail })
          ] }),
          /* @__PURE__ */ r(De, { status: "failed", label: o.status ?? "Restricted" })
        ] }, o.id)) })
      ] })
    ] })
  ] });
}
function vf({ steps: e, completed: t, total: n, phase: i, footer: a, title: o = "Mission progress" }) {
  const s = Math.min(Math.max(t, 0), Math.max(n, 0)), c = n > 0 ? s / n * 100 : 0;
  return /* @__PURE__ */ l("section", { className: "bm-mission-progress", children: [
    /* @__PURE__ */ l("header", { children: [
      /* @__PURE__ */ l("div", { children: [
        /* @__PURE__ */ r("h3", { children: o }),
        i && /* @__PURE__ */ r("span", { children: i })
      ] }),
      /* @__PURE__ */ l("strong", { children: [
        s,
        " of ",
        n,
        " steps"
      ] }),
      /* @__PURE__ */ r("div", { className: "bm-mission-progressbar", role: "progressbar", "aria-label": o, "aria-valuemin": 0, "aria-valuemax": n, "aria-valuenow": s, children: /* @__PURE__ */ r("i", { style: { width: `${c}%` } }) }),
      /* @__PURE__ */ l("div", { className: "bm-mission-progress-meta", children: [
        /* @__PURE__ */ l("span", { children: [
          Math.round(c),
          "% complete"
        ] }),
        /* @__PURE__ */ l("span", { children: [
          Math.max(0, n - s),
          " remaining"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ r("ol", { children: e.map((d) => /* @__PURE__ */ l("li", { "data-state": d.state, children: [
      /* @__PURE__ */ r("span", { className: "bm-mission-node", "aria-hidden": "true", children: d.state === "done" ? /* @__PURE__ */ r(te, { size: 14 }) : /* @__PURE__ */ r(rn, { size: 14 }) }),
      /* @__PURE__ */ l("div", { className: "bm-mission-copy", children: [
        /* @__PURE__ */ r("small", { children: d.meta }),
        /* @__PURE__ */ r("strong", { children: d.label }),
        d.detail && /* @__PURE__ */ r("span", { children: d.detail }),
        d.owner
      ] }),
      d.action && /* @__PURE__ */ r("div", { className: "bm-mission-action", children: d.action })
    ] }, d.id)) }),
    a && /* @__PURE__ */ r("footer", { children: a })
  ] });
}
function gf({ title: e = "Information Memorandum", project: t, version: n, progress: i, readyLabel: a, sections: o, updated: s, owner: c, dependency: d, action: p }) {
  const h = Math.min(100, Math.max(0, i));
  return /* @__PURE__ */ l("section", { className: "bm-memorandum-overview", children: [
    /* @__PURE__ */ l("div", { className: "bm-memorandum-cover", "aria-hidden": "true", children: [
      /* @__PURE__ */ r("span", { children: "ALDER" }),
      /* @__PURE__ */ r("small", { children: t }),
      /* @__PURE__ */ l("strong", { children: [
        "Information",
        /* @__PURE__ */ r("br", {}),
        "Memorandum"
      ] }),
      /* @__PURE__ */ r("em", { children: n }),
      /* @__PURE__ */ r("i", {})
    ] }),
    /* @__PURE__ */ l("div", { className: "bm-memorandum-main", children: [
      /* @__PURE__ */ l("header", { children: [
        /* @__PURE__ */ l("div", { children: [
          /* @__PURE__ */ r("h2", { children: e }),
          /* @__PURE__ */ r("p", { children: a })
        ] }),
        /* @__PURE__ */ r(De, { status: "review", label: n })
      ] }),
      /* @__PURE__ */ l("div", { className: "bm-memorandum-progress", children: [
        /* @__PURE__ */ r("span", { role: "progressbar", "aria-label": "Information Memorandum completion", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": h, children: /* @__PURE__ */ r("i", { style: { width: `${h}%` } }) }),
        /* @__PURE__ */ l("strong", { children: [
          h,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ r("ol", { children: o.map((f) => /* @__PURE__ */ l("li", { "data-state": f.state, children: [
        /* @__PURE__ */ r("span", { "aria-hidden": "true", children: f.state === "ready" ? /* @__PURE__ */ r(te, { size: 14 }) : f.state === "blocked" ? /* @__PURE__ */ r(Ze, { size: 14 }) : /* @__PURE__ */ r(ir, { size: 14 }) }),
        /* @__PURE__ */ r("strong", { children: f.label }),
        /* @__PURE__ */ r(De, { status: f.state === "ready" ? "success" : f.state === "blocked" ? "failed" : "review", label: f.status }),
        f.detail && /* @__PURE__ */ r("small", { children: f.detail })
      ] }, f.id)) })
    ] }),
    /* @__PURE__ */ l("aside", { children: [
      /* @__PURE__ */ r(Fr, { items: [{ label: "Last updated", value: s }, { label: "Owner", value: c }, ...d ? [{ label: "Current dependency", value: d }] : []] }),
      p
    ] })
  ] });
}
function bf({
  columns: e,
  cards: t,
  onOpen: n,
  onMove: i
}) {
  return /* @__PURE__ */ r("div", { className: "bm-kanban", children: e.map((a) => /* @__PURE__ */ l(
    "section",
    {
      onDragOver: (o) => o.preventDefault(),
      onDrop: (o) => {
        o.preventDefault();
        const s = o.dataTransfer.getData("text/plain");
        t.some((c) => c.id === s) && i(s, a.id);
      },
      children: [
        /* @__PURE__ */ l("header", { children: [
          /* @__PURE__ */ r("strong", { children: a.label }),
          /* @__PURE__ */ r("small", { children: t.filter((o) => o.column === a.id).length })
        ] }),
        t.filter((o) => o.column === a.id).map((o) => /* @__PURE__ */ l("article", { draggable: !0, onDragStart: (s) => s.dataTransfer.setData("text/plain", o.id), children: [
          /* @__PURE__ */ l(U, { variant: "ghost", onClick: () => n(o.id), children: [
            o.title,
            /* @__PURE__ */ r(be, { size: 13 })
          ] }),
          /* @__PURE__ */ r("p", { children: o.description }),
          /* @__PURE__ */ r("small", { children: o.meta }),
          /* @__PURE__ */ l("label", { className: "bm-board-move", children: [
            "Move to",
            /* @__PURE__ */ r("select", { "aria-label": `Move ${o.title}`, value: o.column, onChange: (s) => i(o.id, s.target.value), children: e.map((s) => /* @__PURE__ */ r("option", { value: s.id, children: s.label }, s.id)) })
          ] })
        ] }, o.id))
      ]
    },
    a.id
  )) });
}
function yf({ tasks: e, onSelect: t }) {
  const n = e.map((d) => Date.parse(d.start)), i = e.map((d) => Date.parse(d.end)), a = Math.min(...n), o = Math.max(...i, a + 864e5), s = (d) => (Date.parse(d) - a) / (o - a) * 100, c = (d) => new Date(d).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    timeZone: "UTC"
  });
  return /* @__PURE__ */ l("div", { className: "bm-gantt", children: [
    /* @__PURE__ */ l("div", { className: "bm-gantt-scale", children: [
      /* @__PURE__ */ r("span", { children: "Milestone / owner" }),
      /* @__PURE__ */ r("div", { children: [0, 0.25, 0.5, 0.75, 1].map((d) => /* @__PURE__ */ r("small", { children: c(a + (o - a) * d) }, d)) })
    ] }),
    e.map((d) => {
      var p;
      return /* @__PURE__ */ l("div", { className: "bm-gantt-row", children: [
        /* @__PURE__ */ r(U, { variant: "ghost", onClick: () => t(d.id), children: /* @__PURE__ */ l("span", { children: [
          d.title,
          /* @__PURE__ */ l("small", { children: [
            d.owner,
            d.dependsOn ? ` · after ${((p = e.find((h) => h.id === d.dependsOn)) == null ? void 0 : p.title) ?? d.dependsOn}` : ""
          ] })
        ] }) }),
        /* @__PURE__ */ r("div", { className: "bm-gantt-track", children: /* @__PURE__ */ r(
          "button",
          {
            className: "bm-gantt-bar",
            "data-done": d.done,
            "aria-label": `Edit ${d.title}, ${d.start} to ${d.end}`,
            style: {
              left: `${s(d.start)}%`,
              width: `${Math.max(1, s(d.end) - s(d.start))}%`
            },
            onClick: () => t(d.id),
            children: d.done && /* @__PURE__ */ r(te, { size: 12 })
          }
        ) })
      ] }, d.id);
    })
  ] });
}
function wf({ title: e, description: t, onApprove: n, onRequestChanges: i, disabled: a = !1 }) {
  const [o, s] = H(""), [c, d] = H(!1);
  return /* @__PURE__ */ l($t, { children: [
    /* @__PURE__ */ r(cr, { title: e, description: t }),
    /* @__PURE__ */ l(en, { children: [
      /* @__PURE__ */ l(Bo, { children: [
        /* @__PURE__ */ r(U, { variant: "primary", disabled: a, onClick: n, children: "Approve" }),
        i && /* @__PURE__ */ r(U, { disabled: a, onClick: () => d(!c), children: "Request changes" })
      ] }),
      /* @__PURE__ */ r(At, { open: c, children: /* @__PURE__ */ l(en, { children: [
        /* @__PURE__ */ r(zs, { label: "Reason", value: o, onChange: (p) => s(p.target.value) }),
        /* @__PURE__ */ r(
          U,
          {
            disabled: a || !o.trim(),
            onClick: () => {
              i == null || i(o.trim()), d(!1), s("");
            },
            children: "Submit feedback"
          }
        )
      ] }) })
    ] })
  ] });
}
function xf({
  messages: e
}) {
  return /* @__PURE__ */ r("div", { className: "bm-conversation", children: e.map((t) => /* @__PURE__ */ l("article", { "data-outbound": t.outbound, children: [
    /* @__PURE__ */ l("header", { children: [
      /* @__PURE__ */ r("strong", { children: t.author }),
      /* @__PURE__ */ r("small", { children: t.date })
    ] }),
    /* @__PURE__ */ r("p", { children: t.body })
  ] }, t.id)) });
}
function jo({ value: e }) {
  return /* @__PURE__ */ r("div", { className: "bm-prose", children: e.split(`
`).map((t, n) => /* @__PURE__ */ l("p", { children: [
    t.startsWith("- ") ? "• " : "",
    (t.startsWith("- ") ? t.slice(2) : t).split(/(\*\*[^*]+\*\*|\*[^*]+\*)/).map((i, a) => i.startsWith("**") ? /* @__PURE__ */ r("strong", { children: i.slice(2, -2) }, a) : i.startsWith("*") ? /* @__PURE__ */ r("em", { children: i.slice(1, -1) }, a) : i) || " "
  ] }, n)) });
}
function kf({ to: e, subject: t, body: n, onChange: i, onSend: a, state: o = "draft", onBack: s, hideSubject: c = !1, sendLabel: d = "Approve & simulate send" }) {
  const [p, h] = H(!1), [f, u] = H(""), g = Z(null), m = Z(null), v = pt();
  ce(() => {
    var x;
    o !== "draft" && ((x = m.current) == null || x.focus());
  }, [o]);
  function y(x, k = x) {
    const M = g.current;
    if (!M) return;
    const P = M.selectionStart, S = M.selectionEnd, D = n.slice(P, S) || "text";
    i({
      subject: t,
      body: n.slice(0, P) + x + D + k + n.slice(S)
    }), requestAnimationFrame(() => {
      M.focus(), M.setSelectionRange(P + x.length, P + x.length + D.length);
    });
  }
  function w() {
    const x = g.current;
    if (!x) return;
    const k = n.lastIndexOf(`
`, x.selectionStart - 1) + 1, M = n.indexOf(`
`, x.selectionEnd), P = M < 0 ? n.length : M, S = n.slice(k, P).split(`
`).map((D) => D.startsWith("- ") ? D : `- ${D}`).join(`
`);
    i({
      subject: t,
      body: n.slice(0, k) + S + n.slice(P)
    }), requestAnimationFrame(() => {
      x.focus(), x.setSelectionRange(k, k + S.length);
    });
  }
  return /* @__PURE__ */ l("div", { className: "editor-flow bm-message-composer", children: [
    /* @__PURE__ */ l(re.div, { className: "editor-specimen", inert: o !== "draft", "aria-hidden": o !== "draft", animate: { opacity: o === "draft" ? 1 : 0 }, transition: { duration: v ? 0 : 0.18 }, children: [
      /* @__PURE__ */ l("header", { children: [
        /* @__PURE__ */ l("span", { children: [
          /* @__PURE__ */ r(Ne, { size: 15 }),
          " New message"
        ] }),
        /* @__PURE__ */ r(U, { small: !0, variant: "ghost", onClick: () => h(!p), children: p ? "Edit" : "Preview" })
      ] }),
      /* @__PURE__ */ l("div", { className: "editor-to", children: [
        /* @__PURE__ */ r("span", { children: "To" }),
        /* @__PURE__ */ r("span", { className: "recipient-chip", children: /* @__PURE__ */ r("strong", { children: e }) })
      ] }),
      !c && /* @__PURE__ */ l("label", { className: "editor-subject", children: [
        "Subject",
        /* @__PURE__ */ r("input", { "aria-label": "Subject", value: t, onChange: (x) => i({ subject: x.target.value, body: n }) })
      ] }),
      p ? /* @__PURE__ */ r("div", { className: "editor-preview", "aria-label": "Message preview", children: /* @__PURE__ */ r(jo, { value: n }) }) : /* @__PURE__ */ r(
        "textarea",
        {
          ref: g,
          "aria-label": "Message",
          value: n,
          onChange: (x) => {
            u(""), i({ subject: t, body: x.target.value });
          }
        }
      ),
      /* @__PURE__ */ l("div", { className: "editor-bottom", children: [
        /* @__PURE__ */ l("div", { role: "toolbar", "aria-label": "Formatting", children: [
          /* @__PURE__ */ r("button", { type: "button", "aria-label": "Bold", disabled: p, onClick: () => y("**"), children: /* @__PURE__ */ r(ds, { size: 15 }) }),
          /* @__PURE__ */ r("button", { type: "button", "aria-label": "Italic", disabled: p, onClick: () => y("*"), children: /* @__PURE__ */ r(Ms, { size: 15 }) }),
          /* @__PURE__ */ r("button", { type: "button", "aria-label": "List", disabled: p, onClick: w, children: /* @__PURE__ */ r(Ui, { size: 15 }) }),
          /* @__PURE__ */ r("button", { type: "button", "aria-label": "Link", disabled: p, onClick: () => y("[", "](https://example.com)"), children: /* @__PURE__ */ r(Ns, { size: 15 }) })
        ] }),
        /* @__PURE__ */ l(U, { small: !0, variant: "primary", disabled: !n.trim() || !c && !t.trim() || !e, onClick: a, children: [
          /* @__PURE__ */ r(Yi, { size: 13 }),
          " ",
          d
        ] })
      ] }),
      /* @__PURE__ */ l("footer", { children: [
        /* @__PURE__ */ r("span", { role: "status", children: "Draft retained in this browser · no message transmitted" }),
        /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            "aria-label": "Copy message",
            onClick: async () => {
              try {
                await navigator.clipboard.writeText(n), u("Copied");
              } catch {
                u("Copy unavailable");
              }
            },
            children: /* @__PURE__ */ r(ih, { state: f || "idle", icon: f === "Copied" ? /* @__PURE__ */ r(te, { size: 12 }) : /* @__PURE__ */ r(ps, { size: 12 }), text: f || "Copy" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ r(lt, { children: o !== "draft" && /* @__PURE__ */ r(re.div, { className: "editor-send-screen", ref: m, tabIndex: -1, "aria-label": "Simulated send status", initial: { opacity: 0, y: v ? 0 : 8 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: v ? 0 : -6 }, transition: { duration: v ? 0 : 0.22 }, children: /* @__PURE__ */ l(re.div, { className: "editor-send-content", initial: { opacity: 0, y: v ? 0 : 6 }, animate: { opacity: 1, y: 0 }, transition: { duration: v ? 0 : 0.18 }, children: [
      /* @__PURE__ */ r("span", { className: "editor-send-symbol", "data-done": o === "sent", children: o === "sending" ? /* @__PURE__ */ r(ar, { size: 26 }) : /* @__PURE__ */ r(te, { size: 26 }) }),
      /* @__PURE__ */ l("div", { role: "status", children: [
        /* @__PURE__ */ r("h3", { children: o === "sending" ? "Simulating send…" : "Message sent in the simulation" }),
        /* @__PURE__ */ r("p", { children: o === "sending" ? "Preparing your message." : t })
      ] }),
      /* @__PURE__ */ l("p", { className: "editor-send-to", children: [
        "To ",
        e
      ] }),
      /* @__PURE__ */ r("small", { children: "No external message sent · your draft is retained." }),
      o === "sent" && s && /* @__PURE__ */ l(U, { onClick: s, children: [
        /* @__PURE__ */ r(zi, { size: 14 }),
        " View conversation"
      ] })
    ] }, o) }) })
  ] });
}
function Cf({ sections: e, onChange: t, readOnly: n = !1, onSource: i }) {
  const a = ue();
  return /* @__PURE__ */ r("div", { className: "bm-report-editor", children: e.map((o, s) => /* @__PURE__ */ l("section", { children: [
    /* @__PURE__ */ l("header", { children: [
      /* @__PURE__ */ r("span", { children: String(s + 1).padStart(2, "0") }),
      /* @__PURE__ */ r("h3", { children: o.title })
    ] }),
    n ? /* @__PURE__ */ r(jo, { value: o.body }) : /* @__PURE__ */ r("textarea", { id: `${a}-${o.id}`, "aria-label": o.title, value: o.body, onChange: (c) => t(e.map((d) => d.id === o.id ? { ...d, body: c.target.value } : d)) }),
    i && o.source && /* @__PURE__ */ l(U, { variant: "ghost", onClick: () => i(o.source), children: [
      "Source · ",
      o.source
    ] })
  ] }, o.id)) });
}
function Mf({ file: e, sheet: t, cell: n, raw: i, normalized: a, note: o, rows: s }) {
  return /* @__PURE__ */ l(en, { children: [
    /* @__PURE__ */ r(
      Fr,
      {
        items: [
          { label: "File", value: e },
          { label: "Sheet / reference", value: t },
          { label: "Cell / locator", value: n },
          { label: "Source value", value: i },
          { label: "Normalized value", value: a }
        ]
      }
    ),
    /* @__PURE__ */ l(_r, { locale: "en", sortable: !1, children: [
      /* @__PURE__ */ r("thead", { children: /* @__PURE__ */ l("tr", { children: [
        /* @__PURE__ */ r("th", { children: "Cell" }),
        /* @__PURE__ */ r("th", { children: "Source label" }),
        /* @__PURE__ */ r("th", { children: "Value" })
      ] }) }),
      /* @__PURE__ */ r("tbody", { children: s.map((c) => /* @__PURE__ */ l(ct, { "aria-selected": c.cell === n, children: [
        /* @__PURE__ */ r("td", { children: c.cell === n ? /* @__PURE__ */ r("strong", { children: c.cell }) : c.cell }),
        /* @__PURE__ */ r("td", { children: c.label }),
        /* @__PURE__ */ r("td", { children: c.value })
      ] }, c.cell)) })
    ] }),
    o && /* @__PURE__ */ r(zo, { children: o })
  ] });
}
function Nf({ name: e, subtitle: t, initials: n, label: i, photoUrl: a, photoPosition: o = "50%", children: s }) {
  return /* @__PURE__ */ l($t, { children: [
    /* @__PURE__ */ l("div", { className: "bm-profile-heading", children: [
      /* @__PURE__ */ r("span", { className: "bm-profile-avatar", role: "img", "aria-label": e, style: a ? { backgroundImage: `url(${a})`, backgroundPosition: o } : void 0, children: !a && n }),
      /* @__PURE__ */ l("div", { children: [
        i && /* @__PURE__ */ r("small", { children: i }),
        /* @__PURE__ */ r("h2", { children: e }),
        /* @__PURE__ */ r("p", { children: t })
      ] })
    ] }),
    s
  ] });
}
function Sf({ title: e, children: t, sources: n, onSource: i }) {
  return /* @__PURE__ */ l($t, { children: [
    /* @__PURE__ */ r(cr, { title: e }),
    /* @__PURE__ */ l(en, { children: [
      /* @__PURE__ */ r("div", { className: "bm-prose", children: t }),
      /* @__PURE__ */ r(Bo, { children: n.map((a, o) => /* @__PURE__ */ l(U, { onClick: () => i(a.id), children: [
        "[",
        o + 1,
        "] ",
        a.label
      ] }, a.id)) })
    ] })
  ] });
}
function Pf({ items: e, value: t, onChange: n, label: i = "Buyer sources" }) {
  return /* @__PURE__ */ r("nav", { className: "bm-sourcing-tabs", "aria-label": i, children: e.map((a) => /* @__PURE__ */ l(U, { variant: "ghost", disabled: a.disabled, "aria-pressed": a.id === t, onClick: () => n(a.id), children: [
    a.icon,
    /* @__PURE__ */ r("span", { children: a.label }),
    a.badge && /* @__PURE__ */ r("small", { children: a.badge })
  ] }, a.id)) });
}
function Ef({ title: e, description: t, items: n, action: i }) {
  return /* @__PURE__ */ l("section", { className: "bm-criteria-strip", children: [
    /* @__PURE__ */ l("header", { children: [
      /* @__PURE__ */ l("div", { children: [
        /* @__PURE__ */ r("h2", { children: e }),
        t && /* @__PURE__ */ r("p", { children: t })
      ] }),
      i
    ] }),
    /* @__PURE__ */ r("ul", { children: n.map((a) => /* @__PURE__ */ l("li", { children: [
      a.icon,
      /* @__PURE__ */ r("span", { children: a.label })
    ] }, a.id)) })
  ] });
}
function Rf({ suggestion: e, selected: t, onToggle: n, onSource: i }) {
  return /* @__PURE__ */ l("article", { className: "bm-buyer-suggestion", "data-selected": t, children: [
    /* @__PURE__ */ r(U, { className: "bm-buyer-select", variant: "ghost", "aria-pressed": t, "aria-label": `${t ? "Remove" : "Add"} ${e.name} ${t ? "from" : "to"} shortlist`, onClick: () => n(e.id), children: /* @__PURE__ */ r("span", { children: t && /* @__PURE__ */ r(te, { size: 14 }) }) }),
    /* @__PURE__ */ r("img", { className: "bm-company-logo", src: e.logoSrc, alt: `${e.name} logo` }),
    /* @__PURE__ */ l("div", { className: "bm-buyer-suggestion-main", children: [
      /* @__PURE__ */ l("header", { children: [
        /* @__PURE__ */ r("h3", { children: e.name }),
        /* @__PURE__ */ r(De, { status: e.scoreTone ?? "progress", label: e.score })
      ] }),
      /* @__PURE__ */ r("p", { children: e.description }),
      /* @__PURE__ */ r("div", { className: "bm-buyer-facts", children: e.facts.map((a) => /* @__PURE__ */ r("span", { children: a }, a)) }),
      e.warning && /* @__PURE__ */ l("small", { className: "bm-buyer-warning", children: [
        /* @__PURE__ */ r(Ze, { size: 13 }),
        e.warning
      ] })
    ] }),
    /* @__PURE__ */ l("aside", { children: [
      /* @__PURE__ */ r("small", { children: "Sources" }),
      e.sources.map((a) => /* @__PURE__ */ l(U, { variant: "ghost", onClick: () => i == null ? void 0 : i(a.id), children: [
        /* @__PURE__ */ r(Ne, { size: 14 }),
        a.label
      ] }, a.id))
    ] })
  ] });
}
function Af({ buyers: e, owner: t, onRemove: n, onConfirm: i, feedback: a }) {
  return /* @__PURE__ */ l("aside", { className: "bm-shortlist-summary", children: [
    /* @__PURE__ */ l("header", { children: [
      /* @__PURE__ */ r("h2", { children: "Shortlist" }),
      /* @__PURE__ */ l("p", { children: [
        e.length,
        " buyer",
        e.length === 1 ? "" : "s",
        " selected"
      ] })
    ] }),
    /* @__PURE__ */ r("div", { className: "bm-shortlist-buyers", children: e.map((o) => /* @__PURE__ */ l("div", { children: [
      /* @__PURE__ */ r("img", { className: "bm-company-logo", src: o.logoSrc, alt: `${o.name} logo` }),
      /* @__PURE__ */ r("strong", { children: o.name }),
      /* @__PURE__ */ r(U, { variant: "ghost", "aria-label": `Remove ${o.name}`, onClick: () => n(o.id), children: /* @__PURE__ */ r(mt, { size: 15 }) })
    ] }, o.id)) }),
    /* @__PURE__ */ l("section", { children: [
      /* @__PURE__ */ r("h3", { children: "This will create" }),
      /* @__PURE__ */ l("ul", { children: [
        /* @__PURE__ */ l("li", { children: [
          /* @__PURE__ */ r(Ne, { size: 15 }),
          e.length,
          " buyer opportunities"
        ] }),
        /* @__PURE__ */ l("li", { children: [
          /* @__PURE__ */ r(rn, { size: 15 }),
          "Initial stage · Identified"
        ] }),
        /* @__PURE__ */ l("li", { children: [
          /* @__PURE__ */ r(te, { size: 15 }),
          "Owner · ",
          t
        ] }),
        /* @__PURE__ */ l("li", { children: [
          /* @__PURE__ */ r(Ki, { size: 15 }),
          "No organisation record will change"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ l(U, { className: "bm-shortlist-confirm", variant: "primary", disabled: !e.length, onClick: i, children: [
      "Create ",
      e.length,
      " buyer opportunit",
      e.length === 1 ? "y" : "ies"
    ] }),
    a && /* @__PURE__ */ l("p", { className: "bm-shortlist-feedback", role: "status", children: [
      /* @__PURE__ */ r(Cs, { size: 14 }),
      a
    ] })
  ] });
}
function Ri(e, t) {
  return e.map((n) => {
    var i, a;
    return {
      id: n.id,
      title: n.title,
      detail: n.schedule ? /* @__PURE__ */ l("div", { className: "dd-activity-schedule", children: [
        /* @__PURE__ */ r("span", { children: n.schedule.label }),
        /* @__PURE__ */ l("div", { children: [
          /* @__PURE__ */ l("span", { children: [
            /* @__PURE__ */ r("small", { children: t === "en" ? "Start" : "Début" }),
            /* @__PURE__ */ r("time", { children: n.schedule.start })
          ] }),
          /* @__PURE__ */ r(be, { size: 13, "aria-hidden": "true" }),
          /* @__PURE__ */ l("span", { children: [
            /* @__PURE__ */ r("small", { children: t === "en" ? "End" : "Fin" }),
            /* @__PURE__ */ r("time", { children: n.schedule.end })
          ] })
        ] }),
        n.schedule.owner && /* @__PURE__ */ l("small", { children: [
          t === "en" ? "Owner" : "Responsable",
          " · ",
          n.schedule.owner
        ] })
      ] }) : n.detail,
      date: n.day ? `${n.day} · ${((a = (i = n.time) == null ? void 0 : i.match(/\d{1,2}:\d{2}/)) == null ? void 0 : a[0]) ?? n.time ?? ""}` : n.time ?? (t === "en" ? "Activity" : "Activité"),
      actor: n.actor,
      avatarSrc: n.avatarSrc,
      context: n.context ?? n.scope,
      source: n.source,
      status: n.status,
      tone: n.tone
    };
  });
}
function $f({ open: e, title: t, description: n, onClose: i, children: a, footer: o, closeLabel: s = "Fermer le dossier", wide: c = !1, eyebrow: d = "ESPACE DE TRAVAIL", reference: p, properties: h = [], documents: f = [], activity: u = [], activityLabel: g, summaryTitle: m, summary: v, nextStep: y, locale: w = "fr", breadcrumbLabel: x, identityIcon: k }) {
  const M = Z(null), P = Z(null), S = ue(), [D, E] = H("summary"), [T, R] = H(null);
  ce(() => {
    const N = M.current;
    if (!N) return;
    if (!e) {
      N.open && N.close();
      return;
    }
    const _ = document.activeElement;
    return N.open || N.showModal(), () => {
      N.open && N.close(), _ != null && _.isConnected && _.focus();
    };
  }, [e]), ce(() => {
    var N;
    e && (E("summary"), R(null), (N = P.current) == null || N.scrollTo(0, 0));
  }, [e, t]);
  const O = [
    {
      id: "summary",
      label: w === "en" ? "Summary" : "Synthèse",
      count: 0
    },
    ...u.length ? [
      {
        id: "activity",
        label: w === "en" ? "Activity" : "Activité",
        count: u.length
      }
    ] : [],
    ...f.length ? [
      {
        id: "documents",
        label: "Documents",
        count: f.length
      }
    ] : []
  ];
  function L(N) {
    var _;
    E(N), R(null), (_ = P.current) == null || _.scrollTo(0, 0);
  }
  return /* @__PURE__ */ r(
    "dialog",
    {
      ref: M,
      className: "dossier-drawer",
      "data-wide": c,
      "aria-labelledby": S,
      onCancel: (N) => {
        N.preventDefault(), i();
      },
      onClick: (N) => {
        N.target === N.currentTarget && i();
      },
      children: /* @__PURE__ */ l("div", { className: "dd-shell", children: [
        /* @__PURE__ */ l("div", { className: "dd-toolbar", children: [
          /* @__PURE__ */ l("span", { children: [
            /* @__PURE__ */ r(Zr, { size: 13, "aria-hidden": "true" }),
            x ?? (w === "en" ? "Records" : "Dossiers"),
            " ",
            /* @__PURE__ */ r(be, { size: 12, "aria-hidden": "true" }),
            /* @__PURE__ */ r("strong", { children: p ?? t })
          ] }),
          /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r("button", { className: "dd-close", type: "button", "aria-label": s, onClick: i, children: /* @__PURE__ */ r(mt, { size: 17, "aria-hidden": "true" }) }) })
        ] }),
        /* @__PURE__ */ l("header", { className: "dd-header", children: [
          /* @__PURE__ */ l("div", { className: "dd-company", children: [
            /* @__PURE__ */ r("span", { className: "dd-logo", children: k ?? /* @__PURE__ */ r(ji, { size: 24, "aria-hidden": "true" }) }),
            /* @__PURE__ */ l("div", { children: [
              /* @__PURE__ */ r("span", { className: "dd-kicker", children: d === "ESPACE DE TRAVAIL" && w === "en" ? "WORKSPACE RECORD" : d }),
              /* @__PURE__ */ r("h2", { id: S, children: t }),
              n && /* @__PURE__ */ r("p", { children: n })
            ] })
          ] }),
          h.length > 0 && /* @__PURE__ */ r("div", { className: "dd-properties", children: h.map((N) => /* @__PURE__ */ l("div", { children: [
            /* @__PURE__ */ l("span", { children: [
              N.icon ?? (/owner|responsable/i.test(N.label) ? /* @__PURE__ */ r(Os, { size: 13 }) : /date|due|closed/i.test(N.label) ? /* @__PURE__ */ r(je, { size: 13 }) : /geography|country/i.test(N.label) ? /* @__PURE__ */ r(or, { size: 13 }) : /* @__PURE__ */ r(Zr, { size: 13 })),
              N.label
            ] }),
            /* @__PURE__ */ r("strong", { className: /stage|context|status/i.test(N.label) ? "dd-stage" : void 0, children: N.value })
          ] }, N.label)) })
        ] }),
        /* @__PURE__ */ r("div", { className: "dd-tabs", role: "tablist", "aria-label": w === "en" ? "Record sections" : "Sections du dossier", children: O.map((N, _) => /* @__PURE__ */ l(
          "button",
          {
            id: `${S}-tab-${N.id}`,
            type: "button",
            role: "tab",
            "aria-selected": D === N.id,
            "aria-controls": `${S}-panel`,
            tabIndex: D === N.id ? 0 : -1,
            onClick: () => L(N.id),
            onKeyDown: (j) => {
              var C;
              if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(j.key)) return;
              j.preventDefault();
              const G = j.key === "Home" ? 0 : j.key === "End" ? O.length - 1 : (_ + (j.key === "ArrowRight" ? 1 : O.length - 1)) % O.length;
              L(O[G].id), (C = document.getElementById(`${S}-tab-${O[G].id}`)) == null || C.focus();
            },
            children: [
              N.label,
              N.count > 0 && /* @__PURE__ */ r("span", { children: N.count })
            ]
          },
          N.id
        )) }),
        /* @__PURE__ */ r("div", { className: "dd-body", ref: P, role: "tabpanel", id: `${S}-panel`, "aria-labelledby": `${S}-tab-${D}`, tabIndex: 0, children: D === "summary" ? /* @__PURE__ */ l(q, { children: [
          v && /* @__PURE__ */ r("p", { className: "dd-summary", children: v }),
          y && /* @__PURE__ */ l("section", { className: "dd-next", children: [
            /* @__PURE__ */ r("span", { className: "dd-next-icon", children: /* @__PURE__ */ r(je, { size: 18 }) }),
            /* @__PURE__ */ l("div", { children: [
              /* @__PURE__ */ r("span", { children: y.label ?? (w === "en" ? "NEXT STEP" : "PROCHAINE ÉTAPE") }),
              /* @__PURE__ */ r("h3", { children: y.title }),
              y.detail && /* @__PURE__ */ r("div", { className: "dd-next-detail", children: y.detail })
            ] }),
            y.action
          ] }),
          /* @__PURE__ */ l("section", { className: "dd-section", children: [
            m !== "" && /* @__PURE__ */ r("div", { className: "dd-section-heading", children: /* @__PURE__ */ r("h3", { children: m ?? (w === "en" ? "Summary" : "Synthèse") }) }),
            a
          ] }),
          f.length > 0 && /* @__PURE__ */ l("section", { className: "dd-section", children: [
            /* @__PURE__ */ l("div", { className: "dd-section-heading", children: [
              /* @__PURE__ */ l("h3", { children: [
                w === "en" ? "Related documents" : "Documents associés",
                " ",
                /* @__PURE__ */ r("small", { children: f.length })
              ] }),
              /* @__PURE__ */ l("button", { onClick: () => L("documents"), children: [
                w === "en" ? "View all" : "Tout voir",
                /* @__PURE__ */ r(be, { size: 12 })
              ] })
            ] }),
            f.slice(0, 2).map((N) => /* @__PURE__ */ l(
              "button",
              {
                className: "dd-file-row",
                onClick: () => {
                  L("documents"), R(N.id);
                },
                children: [
                  /* @__PURE__ */ r("span", { className: "dd-file-icon", children: /* @__PURE__ */ r(Ne, { size: 18 }) }),
                  /* @__PURE__ */ l("span", { children: [
                    /* @__PURE__ */ r("strong", { children: N.name }),
                    /* @__PURE__ */ r("small", { children: N.meta })
                  ] }),
                  /* @__PURE__ */ r(Yr, { size: 13 })
                ]
              },
              N.id
            ))
          ] }),
          u.length > 0 && /* @__PURE__ */ l("section", { className: "dd-section", children: [
            /* @__PURE__ */ l("div", { className: "dd-section-heading", children: [
              /* @__PURE__ */ r("h3", { children: w === "en" ? "Latest activity" : "Dernière activité" }),
              /* @__PURE__ */ l("button", { onClick: () => L("activity"), children: [
                w === "en" ? "View timeline" : "Voir le fil",
                /* @__PURE__ */ r(be, { size: 12 })
              ] })
            ] }),
            /* @__PURE__ */ r(Ei, { items: Ri(u.slice(0, 1), w) })
          ] })
        ] }) : D === "activity" ? /* @__PURE__ */ l(q, { children: [
          /* @__PURE__ */ l("div", { className: "dd-section-heading", children: [
            /* @__PURE__ */ r("h3", { children: g ?? (w === "en" ? "Record history" : "Historique du dossier") }),
            /* @__PURE__ */ l("span", { className: "dd-muted", children: [
              u.length,
              " ",
              w === "en" ? "events" : "événements"
            ] })
          ] }),
          /* @__PURE__ */ r(Ei, { items: Ri(u, w) })
        ] }) : /* @__PURE__ */ l(q, { children: [
          /* @__PURE__ */ l("div", { className: "dd-section-heading", children: [
            /* @__PURE__ */ r("h3", { children: w === "en" ? "Record documents" : "Documents du dossier" }),
            /* @__PURE__ */ l("span", { className: "dd-muted", children: [
              f.length,
              " ",
              w === "en" ? "files" : "fichiers"
            ] })
          ] }),
          /* @__PURE__ */ r("p", { className: "dd-doc-intro", children: w === "en" ? "Working documents and verification status." : "Pièces de travail et état de vérification." }),
          f.map((N) => /* @__PURE__ */ l("div", { className: "dd-document", children: [
            /* @__PURE__ */ l("button", { type: "button", className: "dd-file-row", "aria-expanded": T === N.id, onClick: () => R(T === N.id ? null : N.id), children: [
              /* @__PURE__ */ r("span", { className: "dd-file-icon", children: /* @__PURE__ */ r(Ne, { size: 19 }) }),
              /* @__PURE__ */ l("span", { children: [
                /* @__PURE__ */ r("strong", { children: N.name }),
                N.meta && /* @__PURE__ */ r("small", { children: N.meta })
              ] }),
              /* @__PURE__ */ r(Yr, { size: 13 }),
              /* @__PURE__ */ r(be, { size: 14, className: T === N.id ? "rotated" : "" })
            ] }),
            /* @__PURE__ */ r(At, { open: T === N.id, children: /* @__PURE__ */ r("div", { className: "dd-doc-preview", children: N.content }) })
          ] }, N.id)),
          /* @__PURE__ */ l("div", { className: "dd-document-foot", children: [
            /* @__PURE__ */ r(Es, { size: 13 }),
            w === "en" ? "Documents belong to the selected record." : "Les pièces restent rattachées au dossier sélectionné."
          ] })
        ] }) }),
        o ? /* @__PURE__ */ r("footer", { className: "dd-footer", children: o }) : /* @__PURE__ */ l("footer", { className: "dd-footer", children: [
          /* @__PURE__ */ l("span", { children: [
            /* @__PURE__ */ r("i", {}),
            w === "en" ? "Synthetic data" : "Données de démonstration"
          ] }),
          /* @__PURE__ */ r("span", { children: u.length ? /* @__PURE__ */ l(q, { children: [
            /* @__PURE__ */ r(Hi, { size: 11 }),
            " ",
            u.length,
            " ",
            w === "en" ? "activities" : "activités"
          ] }) : null })
        ] })
      ] })
    }
  );
}
function Df({ documents: e }) {
  const [t, n] = H(null), i = ue();
  return /* @__PURE__ */ r("div", { className: "bm-documents", children: e.map((a, o) => /* @__PURE__ */ l("section", { children: [
    /* @__PURE__ */ l("button", { className: "bm-document-trigger", "aria-expanded": t === a.id, "aria-controls": `${i}-${o}`, onClick: () => n(t === a.id ? null : a.id), children: [
      /* @__PURE__ */ r(Ne, { size: 18 }),
      /* @__PURE__ */ l("span", { children: [
        /* @__PURE__ */ r("strong", { children: a.name }),
        a.meta && /* @__PURE__ */ r("small", { children: a.meta })
      ] }),
      a.status && /* @__PURE__ */ r("span", { className: "bm-document-status", children: a.status }),
      /* @__PURE__ */ r(Ue, { size: 14 })
    ] }),
    /* @__PURE__ */ r("div", { id: `${i}-${o}`, children: /* @__PURE__ */ r(At, { open: t === a.id, children: /* @__PURE__ */ r("div", { className: "bm-document-content", children: a.content }) }) })
  ] }, a.id)) });
}
const oh = {
  pending: "En attente",
  running: "En cours",
  done: "Terminé",
  paused: "En pause",
  failed: "Échec"
};
function If({ steps: e, title: t = "Journal d’exécution", progressive: n = !0, children: i, locale: a = "fr" }) {
  var p;
  const [o, s] = H(!0), c = ue(), d = e.filter((h) => h.state === "done").length;
  return /* @__PURE__ */ l("section", { className: "bm-execution", children: [
    /* @__PURE__ */ l("button", { className: "bm-execution-heading", "aria-expanded": o, "aria-controls": c, onClick: () => s(!o), children: [
      /* @__PURE__ */ r("span", { children: t }),
      /* @__PURE__ */ l("small", { children: [
        d,
        " / ",
        e.length
      ] }),
      /* @__PURE__ */ r(Ue, { size: 14, style: { transform: o ? "none" : "rotate(-90deg)" } })
    ] }),
    /* @__PURE__ */ l("p", { className: "bm-sr-only", role: "status", children: [
      ((p = e.find((h) => h.state === "running" || h.state === "paused" || h.state === "failed")) == null ? void 0 : p.label) ?? t,
      " · ",
      d,
      " ",
      a === "en" ? "steps complete" : "étapes terminées"
    ] }),
    /* @__PURE__ */ r("div", { id: c, children: /* @__PURE__ */ l(At, { open: o, children: [
      /* @__PURE__ */ r("ol", { className: "bm-execution-steps", children: e.filter((h) => !n || h.state !== "pending").map((h) => /* @__PURE__ */ l("li", { "data-state": h.state, children: [
        h.state === "done" ? /* @__PURE__ */ r(te, { size: 16 }) : h.state === "running" ? /* @__PURE__ */ r(ar, { size: 16, className: "bm-spin" }) : h.state === "paused" ? /* @__PURE__ */ r(qi, { size: 16 }) : /* @__PURE__ */ r(rn, { size: 14 }),
        /* @__PURE__ */ l("div", { children: [
          /* @__PURE__ */ r("strong", { children: h.label }),
          h.detail && /* @__PURE__ */ r("p", { children: h.detail })
        ] }),
        /* @__PURE__ */ r("small", { children: a === "en" ? {
          pending: "Pending",
          running: "Running",
          done: "Done",
          paused: "Paused",
          failed: "Failed"
        }[h.state] : oh[h.state] })
      ] }, h.id)) }),
      i
    ] }) })
  ] });
}
function Tf({ value: e, onChange: t, onSubmit: n, disabled: i = !1, label: a = "Consigne", submitLabel: o = "Préparer la synthèse" }) {
  const s = ue();
  return /* @__PURE__ */ l(
    "form",
    {
      className: "bm-composer",
      onSubmit: (c) => {
        c.preventDefault(), e.trim() && !i && n();
      },
      children: [
        /* @__PURE__ */ r("label", { htmlFor: s, children: a }),
        /* @__PURE__ */ r("textarea", { id: s, value: e, onChange: (c) => t(c.target.value), disabled: i, rows: 3, required: !0 }),
        /* @__PURE__ */ r("div", { className: "bm-row", children: /* @__PURE__ */ r(U, { type: "submit", variant: "primary", disabled: i || !e.trim(), children: o }) })
      ]
    }
  );
}
function Of({ value: e, onChange: t, label: n = "Synthèse", readOnly: i = !1 }) {
  const a = ue();
  return /* @__PURE__ */ l("div", { className: "bm-text-editor", children: [
    /* @__PURE__ */ r("label", { htmlFor: a, children: n }),
    /* @__PURE__ */ r("textarea", { id: a, value: e, onChange: (o) => t(o.target.value), readOnly: i, rows: 10 })
  ] });
}
function Lf({ brand: e, items: t, active: n, onNavigate: i, toolbar: a, footer: o, children: s, density: c = "comfortable" }) {
  const [d, p] = H(null);
  return /* @__PURE__ */ l("div", { className: "bm-ui bm-workspace", "data-density": c, children: [
    /* @__PURE__ */ l("aside", { className: "bm-workspace-nav", children: [
      /* @__PURE__ */ r("div", { className: "bm-workspace-brand", children: e }),
      /* @__PURE__ */ r("nav", { "aria-label": "Primary navigation", children: t.map((h) => {
        var g;
        const f = ((g = h.children) == null ? void 0 : g.some((m) => m.id === n)) ?? !1, u = f || d === h.id;
        return /* @__PURE__ */ l("div", { className: "bm-workspace-nav-group", "data-open": u, "data-active": f || n === h.id, onMouseEnter: () => h.children && p(h.id), onMouseLeave: () => p((m) => m === h.id ? null : m), onFocus: () => h.children && p(h.id), onBlur: (m) => {
          m.currentTarget.contains(m.relatedTarget) || p((v) => v === h.id ? null : v);
        }, children: [
          /* @__PURE__ */ l("button", { "aria-current": n === h.id ? "page" : void 0, "aria-expanded": h.children ? u : void 0, onClick: () => i(h.id), onKeyDown: (m) => {
            m.key === "Escape" && (p(null), m.currentTarget.focus());
          }, children: [
            h.icon,
            /* @__PURE__ */ r("span", { children: h.label }),
            h.children && /* @__PURE__ */ r(Ue, { className: "bm-workspace-nav-chevron", "aria-hidden": "true" })
          ] }),
          h.children && /* @__PURE__ */ r("div", { className: "bm-workspace-subnav", "aria-hidden": !u, children: /* @__PURE__ */ r("div", { children: h.children.map((m) => /* @__PURE__ */ l("button", { tabIndex: u ? 0 : -1, "aria-current": n === m.id ? "page" : void 0, onClick: () => i(m.id), children: [
            m.icon,
            /* @__PURE__ */ r("span", { children: m.label })
          ] }, m.id)) }) })
        ] }, h.id);
      }) })
    ] }),
    /* @__PURE__ */ l("div", { className: "bm-workspace-main", children: [
      /* @__PURE__ */ r("header", { className: "bm-workspace-toolbar", children: a }),
      /* @__PURE__ */ r("main", { id: "mainContent", children: s }),
      /* @__PURE__ */ r("footer", { className: "bm-workspace-footer", children: o })
    ] })
  ] });
}
function _f({ events: e, title: t = "À venir", footer: n = "Cette semaine · horaires de Paris", onOpen: i, onDone: a }) {
  const o = pt(), [s, c] = H(null), [d, p] = H(/* @__PURE__ */ new Set()), [h, f] = H("");
  return /* @__PURE__ */ l("section", { className: "agenda-cards-demo", "aria-label": "Agenda compact", children: [
    /* @__PURE__ */ l("header", { children: [
      /* @__PURE__ */ l("span", { children: [
        /* @__PURE__ */ r(je, { size: 15 }),
        " ",
        t,
        " ",
        /* @__PURE__ */ r("small", { children: e.length - d.size })
      ] }),
      /* @__PURE__ */ r(
        U,
        {
          small: !0,
          variant: "ghost",
          onClick: () => {
            c(null), p(/* @__PURE__ */ new Set()), f("Agenda réinitialisé.");
          },
          "aria-label": "Réinitialiser l’agenda",
          children: /* @__PURE__ */ r(Rt, { size: 12 })
        }
      )
    ] }),
    /* @__PURE__ */ r("div", { className: "agenda-card-list", children: e.map((u) => /* @__PURE__ */ l(
      "article",
      {
        className: "agenda-event",
        "data-done": d.has(u.id),
        "data-expanded": s === u.id,
        children: [
          /* @__PURE__ */ l(
            "button",
            {
              className: "agenda-event-summary",
              "aria-expanded": s === u.id,
              "aria-controls": `agenda-detail-${u.id}`,
              onClick: () => c(s === u.id ? null : u.id),
              children: [
                /* @__PURE__ */ l(
                  "time",
                  {
                    className: "agenda-event-date",
                    dateTime: `2026-09-${u.day}`,
                    children: [
                      /* @__PURE__ */ r("span", { children: u.month }),
                      /* @__PURE__ */ r("strong", { children: u.day }),
                      /* @__PURE__ */ r("small", { children: u.day === "16" ? "MER." : u.day === "17" ? "JEU." : "VEN." })
                    ]
                  }
                ),
                /* @__PURE__ */ l("span", { className: "agenda-event-body", children: [
                  /* @__PURE__ */ l("span", { className: "agenda-event-heading", children: [
                    /* @__PURE__ */ r("strong", { children: u.title }),
                    /* @__PURE__ */ r(
                      "span",
                      {
                        className: `agenda-priority ${d.has(u.id) ? "done" : u.tone}`,
                        children: d.has(u.id) ? "Terminé" : u.priority
                      }
                    )
                  ] }),
                  /* @__PURE__ */ l("span", { className: "agenda-event-time", children: [
                    /* @__PURE__ */ r(Gi, { size: 12 }),
                    u.time
                  ] }),
                  /* @__PURE__ */ r("span", { className: "agenda-event-description", children: u.description })
                ] }),
                /* @__PURE__ */ r(be, { size: 13, className: "agenda-event-chevron" })
              ]
            }
          ),
          /* @__PURE__ */ r(lt, { initial: !1, children: s === u.id && /* @__PURE__ */ r(re.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, transition: { duration: o ? 0 : 0.22, ease: [0.22, 1, 0.36, 1] }, style: { overflow: "hidden" }, children: /* @__PURE__ */ l(
            "div",
            {
              id: `agenda-detail-${u.id}`,
              className: "agenda-event-detail",
              children: [
                /* @__PURE__ */ l("span", { className: "agenda-event-place", children: [
                  u.place === "Visioconférence" ? /* @__PURE__ */ r(Ls, { size: 13 }) : /* @__PURE__ */ r(or, { size: 13 }),
                  " ",
                  u.place
                ] }),
                /* @__PURE__ */ l("span", { className: "agenda-event-owner", children: [
                  /* @__PURE__ */ r("span", { className: "agenda-owner-avatar", "aria-hidden": "true", children: u.owner.split(" ").map((g) => g[0]).join("") }),
                  /* @__PURE__ */ l("span", { children: [
                    /* @__PURE__ */ r("small", { children: "Organisé par" }),
                    /* @__PURE__ */ r("strong", { children: u.owner })
                  ] })
                ] }),
                /* @__PURE__ */ l(
                  U,
                  {
                    small: !0,
                    variant: "default",
                    onClick: () => {
                      p((g) => {
                        const m = new Set(g);
                        return m.has(u.id) ? m.delete(u.id) : m.add(u.id), m;
                      }), f(
                        d.has(u.id) ? `${u.title} remis à venir.` : `${u.title} marqué terminé.`
                      ), a == null || a(u.id);
                    },
                    children: [
                      /* @__PURE__ */ r(te, { size: 12 }),
                      d.has(u.id) ? "Remettre à venir" : "Marquer terminé"
                    ]
                  }
                ),
                i && /* @__PURE__ */ r(U, { small: !0, variant: "ghost", onClick: () => i(u.id), children: "Ouvrir" })
              ]
            }
          ) }, "details") })
        ]
      },
      u.id
    )) }),
    /* @__PURE__ */ r("footer", { role: "status", children: h || n })
  ] });
}
function sh(e, t, n, i = null, a = ["Qualification", "Proposition", "Négociation"]) {
  const o = e.find((p) => p.id === t);
  if (!o || i === t || !a.includes(n))
    return e;
  const s = e.filter((p) => p.id !== t), c = s.findIndex(
    (p) => p.id === i && p.stage === n
  ), d = { ...o, stage: n };
  return c >= 0 ? s.splice(c, 0, d) : s.push(d), s;
}
const Vt = ["Qualification", "Proposition", "Négociation"], Mt = [
  {
    id: "nord",
    name: "Atelier Nord",
    sector: "Acquisition · Industrie",
    owner: "AM",
    city: "Lyon, FR",
    amount: 48e4,
    date: "30 sept. 2026",
    probability: 42,
    stage: Vt[0],
    status: "En cours"
  },
  {
    id: "rivage",
    name: "Studio Rivage",
    sector: "Cession · Services",
    owner: "ED",
    city: "Nantes, FR",
    amount: 32e4,
    date: "12 oct. 2026",
    probability: 35,
    stage: Vt[0],
    status: "À suivre"
  },
  {
    id: "alto",
    name: "Alto Industrie",
    sector: "Acquisition · Industrie",
    owner: "AM",
    city: "Paris, FR",
    amount: 86e4,
    date: "8 oct. 2026",
    probability: 64,
    stage: Vt[1],
    status: "En cours"
  },
  {
    id: "astree",
    name: "Maison Astrée",
    sector: "Cession · Retail",
    owner: "PL",
    city: "Bordeaux, FR",
    amount: 125e4,
    date: "25 sept. 2026",
    probability: 82,
    stage: Vt[2],
    status: "Bien engagé"
  }
], ch = ["Brouillon", "À signer", "Signé"], lh = [
  { ...Mt[0], id: "mission", name: "Lettre de mission", sector: "Mandat de cession · Atelier Nord", stage: "Brouillon", date: "15 sept. 2026", status: "Version 2 · 248 Ko" },
  { ...Mt[1], id: "nda", name: "Accord de confidentialité", sector: "NDA · Maison Astrée", stage: "À signer", date: "14 sept. 2026", status: "Version 1 · 186 Ko" },
  { ...Mt[2], id: "presentation", name: "Présentation société", sector: "Dossier de cession · Atelier Nord", stage: "Brouillon", date: "15 sept. 2026", status: "Version 3 · 2,4 Mo" },
  { ...Mt[3], id: "loi", name: "Lettre d’intention", sector: "LOI · Atelier Nord", stage: "Signé", date: "12 sept. 2026", status: "Version 2 · 320 Ko" }
];
function Ff({ columns: e, cards: t, onOpen: n, onMove: i, readOnlyStages: a = !1, label: o, currency: s = "EUR", locale: c = "fr-FR", action: d }) {
  return /* @__PURE__ */ r(dh, { boardCards: t, boardColumns: e, onOpen: n, onMove: i, readOnlyStages: a, label: o, currency: s, locale: c, action: d });
}
function dh({ documents: e = !1, boardCards: t, boardColumns: n, onOpen: i, onMove: a, readOnlyStages: o = !1, label: s, currency: c = "EUR", locale: d = "fr-FR", action: p }) {
  var A;
  const h = d.startsWith("en"), f = t ?? (e ? lh : Mt), u = n ?? (e ? ch : ["Qualification", "Proposition", "Négociation"]), [g, m] = H(f), [v, y] = H(null), [w, x] = H(null), [k, M] = H(240), [P, S] = H(null), [D, E] = H(""), T = pt(), R = Z(null), O = Z(!1), [L, N] = H(null), _ = (t == null ? void 0 : t.map(($) => `${$.id}:${$.stage}`).join("|")) ?? "";
  ce(() => {
    t && m(t);
  }, [_]), ce(() => {
    const $ = (V) => {
      V.key === "Escape" && (R.current = null, y(null), x(null), S(null), N(null));
    };
    return window.addEventListener("keydown", $), () => window.removeEventListener("keydown", $);
  }, []);
  function j($, V) {
    o || $.button !== 0 || $.target.closest("button") || ($.preventDefault(), $.currentTarget.setPointerCapture($.pointerId), R.current = { id: V, x: $.clientX, y: $.clientY, active: !1 }, M($.currentTarget.getBoundingClientRect().height));
  }
  function G($) {
    var he, me;
    const V = R.current;
    if (!V || !V.active && Math.hypot($.clientX - V.x, $.clientY - V.y) < 5) return;
    V.active = !0, N({ x: $.clientX, y: $.clientY }), y(V.id);
    const B = (he = document.elementFromPoint($.clientX, $.clientY)) == null ? void 0 : he.closest("[data-kb-stage]");
    if (!B) {
      x(null);
      return;
    }
    const F = B.dataset.kbStage, K = ((me = Array.from(B.querySelectorAll("[data-deal-id]")).filter((xe) => xe.dataset.dealId !== V.id).find((xe) => $.clientY < xe.getBoundingClientRect().top + xe.getBoundingClientRect().height / 2)) == null ? void 0 : me.dataset.dealId) ?? null;
    S(F), x({ stage: F, before: K, height: k });
  }
  function C() {
    var $;
    ($ = R.current) != null && $.active && (O.current = !0, window.setTimeout(() => {
      O.current = !1;
    }, 0), z()), R.current = null, y(null), S(null), x(null), N(null);
  }
  function I($, V, B = null, F = !1) {
    var X;
    if (!o) {
      if ((a == null ? void 0 : a($, V)) === !1) {
        y(null), S(null), x(null);
        return;
      }
      m((K) => sh(K, $, V, B, u)), E(
        `${(X = g.find((K) => K.id === $)) == null ? void 0 : X.name} ${h ? "moved to" : "déplacé dans"} ${V}.`
      ), y(null), S(null), F && requestAnimationFrame(
        () => {
          var K;
          return (K = document.querySelector(`[data-kb-trigger="${$}"]`)) == null ? void 0 : K.focus();
        }
      );
    }
  }
  function z() {
    v && w && I(v, w.stage, w.before), x(null);
  }
  return /* @__PURE__ */ l("div", { className: "kb-demo kb-deals", onPointerMove: G, onPointerUp: C, onPointerCancel: () => {
    R.current = null, y(null), S(null), x(null), N(null);
  }, children: [
    L && /* @__PURE__ */ r("div", { className: "kb-drag-ghost", style: { left: L.x + 14, top: L.y + 12 }, children: (A = g.find(($) => $.id === v)) == null ? void 0 : A.name }),
    /* @__PURE__ */ l("div", { className: "kb-toolbar", children: [
      /* @__PURE__ */ l("span", { children: [
        s ?? (e ? "Documents" : h ? "Opportunities" : "Opportunités"),
        " ",
        /* @__PURE__ */ r("b", { children: g.length })
      ] }),
      /* @__PURE__ */ l("div", { className: "kb-toolbar-actions", children: [
        p,
        !o && /* @__PURE__ */ l(
          "button",
          {
            onClick: () => {
              m(f), x(null), f.forEach(($) => a == null ? void 0 : a($.id, $.stage)), E(h ? "Board reset." : "Kanban réinitialisé.");
            },
            children: [
              /* @__PURE__ */ r(Rt, { size: 12 }),
              d.startsWith("en") ? "Reset" : "Réinitialiser"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ r("div", { className: "kb-board", "aria-label": h ? e ? "Documents by status" : "Records by stage" : e ? "Documents par état" : "Opportunités par étape", children: u.map(($) => {
      const V = u.indexOf($), B = g.filter((F) => F.stage === $);
      return /* @__PURE__ */ l(
        "section",
        {
          className: `kb-column ${P === $ ? "is-over" : ""}`,
          "aria-label": $,
          "data-kb-stage": $,
          children: [
            /* @__PURE__ */ l("header", { children: [
              !o && /* @__PURE__ */ r("span", { className: "kb-column-grip", "aria-hidden": "true", children: /* @__PURE__ */ r(ks, { size: 13 }) }),
              /* @__PURE__ */ r(
                "i",
                {
                  style: {
                    background: ["#73a6dc", "#a78bd4", "#78b49b"][V]
                  }
                }
              ),
              /* @__PURE__ */ r("h3", { children: $ }),
              /* @__PURE__ */ r("span", { children: B.length }),
              !g.some((F) => F.amountLabel) && /* @__PURE__ */ r("strong", { children: e ? `${B.length} ${h ? "file" : "fichier"}${B.length === 1 ? "" : "s"}` : new Intl.NumberFormat(d, { style: "currency", currency: c, maximumFractionDigits: 0 }).format(B.reduce((F, X) => F + X.amount, 0)) })
            ] }),
            /* @__PURE__ */ l("div", { className: "kb-cards", children: [
              B.map((F, X) => /* @__PURE__ */ l(nn, { children: [
                (w == null ? void 0 : w.stage) === $ && w.before === F.id && /* @__PURE__ */ r(re.div, { layout: !T, className: "kb-placeholder", style: { height: w.height }, children: /* @__PURE__ */ r("span", { children: h ? "Drop here" : "Déposer ici" }) }),
                /* @__PURE__ */ l(
                  re.article,
                  {
                    layout: !T,
                    transition: { type: "spring", stiffness: 380, damping: 36 },
                    className: `kb-card ${e ? "kb-file-card" : ""} ${v === F.id ? "is-dragging" : ""}`,
                    "data-deal-id": F.id,
                    onPointerDown: (K) => j(K, F.id),
                    role: i ? "button" : void 0,
                    "aria-label": i ? `${h ? "Open" : "Ouvrir"} ${F.name}` : void 0,
                    tabIndex: i ? 0 : void 0,
                    onClick: (K) => {
                      if (O.current) {
                        O.current = !1;
                        return;
                      }
                      i && !K.target.closest("button,a,input,select,textarea,[role=menuitem]") && i(F.id);
                    },
                    onKeyDown: (K) => {
                      i && K.target === K.currentTarget && (K.key === "Enter" || K.key === " ") && (K.preventDefault(), i(F.id));
                    },
                    children: [
                      /* @__PURE__ */ l("div", { className: "kb-card-head", children: [
                        /* @__PURE__ */ r("span", { className: e ? "kb-file-symbol" : `kb-avatar kb-avatar-${F.owner}`, children: e ? /* @__PURE__ */ r(Ne, { size: 21 }) : /* @__PURE__ */ r(q, { children: F.avatarSrc ? /* @__PURE__ */ r("img", { src: F.avatarSrc, alt: F.ownerName ?? F.owner, draggable: !1 }) : F.owner }) }),
                        /* @__PURE__ */ l("div", { children: [
                          /* @__PURE__ */ r("h4", { children: F.name }),
                          /* @__PURE__ */ r("p", { children: F.sector })
                        ] }),
                        !o && /* @__PURE__ */ l(Rr, { children: [
                          /* @__PURE__ */ r(Ar, { asChild: !0, children: /* @__PURE__ */ r(
                            "button",
                            {
                              className: "kb-card-menu",
                              "data-kb-trigger": F.id,
                              "aria-label": `${h ? "Actions for" : "Actions pour"} ${F.name}`,
                              children: /* @__PURE__ */ r(ms, { size: 15 })
                            }
                          ) }),
                          /* @__PURE__ */ l(yn, { align: "start", children: [
                            i && /* @__PURE__ */ r(Fe, { onSelect: () => i(F.id), children: h ? "Open record" : "Ouvrir le dossier" }),
                            !o && u.map((K) => /* @__PURE__ */ l(
                              Fe,
                              {
                                disabled: K === $,
                                onSelect: () => I(F.id, K, null, !0),
                                children: [
                                  /* @__PURE__ */ r(Bi, { size: 13 }),
                                  K
                                ]
                              },
                              K
                            )),
                            !o && /* @__PURE__ */ r(
                              Fe,
                              {
                                disabled: X === 0,
                                onSelect: () => {
                                  var K;
                                  return I(F.id, $, (K = B[X - 1]) == null ? void 0 : K.id, !0);
                                },
                                children: h ? "Move up in column" : "Monter dans la colonne"
                              }
                            ),
                            !o && /* @__PURE__ */ r(
                              Fe,
                              {
                                disabled: X === B.length - 1,
                                onSelect: () => {
                                  var K;
                                  return I(
                                    F.id,
                                    $,
                                    ((K = B[X + 2]) == null ? void 0 : K.id) ?? null,
                                    !0
                                  );
                                },
                                children: h ? "Move down in column" : "Descendre dans la colonne"
                              }
                            )
                          ] })
                        ] })
                      ] }),
                      e ? /* @__PURE__ */ l("div", { className: "kb-file-content", children: [
                        /* @__PURE__ */ l("div", { className: "kb-file-format", children: [
                          /* @__PURE__ */ r("span", { children: "PDF" }),
                          /* @__PURE__ */ r("small", { children: F.status })
                        ] }),
                        /* @__PURE__ */ l("div", { className: "kb-file-property", children: [
                          /* @__PURE__ */ r(je, { size: 13 }),
                          /* @__PURE__ */ r("span", { children: h ? "Updated" : "Mis à jour" }),
                          /* @__PURE__ */ r("strong", { children: F.date })
                        ] }),
                        /* @__PURE__ */ l("div", { className: "kb-file-property", children: [
                          /* @__PURE__ */ r(ei, { size: 13 }),
                          /* @__PURE__ */ r("span", { children: $ === "Signé" ? h ? "Signatories" : "Signataires" : h ? "Signing workflow" : "Circuit de signature" }),
                          /* @__PURE__ */ r("strong", { children: $ === "Signé" ? "2 / 2" : $ === "À signer" ? "1 / 2" : h ? "To prepare" : "À préparer" })
                        ] }),
                        /* @__PURE__ */ r("div", { className: "kb-track", children: /* @__PURE__ */ r("span", { style: { width: $ === "Signé" ? "100%" : $ === "À signer" ? "50%" : "0%", background: $ === "Signé" ? "#62ad8c" : "#c3a16c" } }) })
                      ] }) : /* @__PURE__ */ l(q, { children: [
                        !F.hideProgress && /* @__PURE__ */ l(q, { children: [
                          /* @__PURE__ */ l("div", { className: "kb-probability", children: [
                            /* @__PURE__ */ r("span", { children: F.progressLabel ?? (d.startsWith("en") ? "Probability" : "Probabilité") }),
                            /* @__PURE__ */ l("b", { children: [
                              F.probability,
                              " %"
                            ] })
                          ] }),
                          /* @__PURE__ */ r("div", { className: "kb-track", children: /* @__PURE__ */ r(
                            "span",
                            {
                              style: {
                                width: `${F.probability}%`,
                                background: F.probability > 75 ? "#62ad8c" : "#7ca4da"
                              }
                            }
                          ) })
                        ] }),
                        /* @__PURE__ */ l("dl", { children: [
                          /* @__PURE__ */ l("div", { children: [
                            /* @__PURE__ */ l("dt", { children: [
                              /* @__PURE__ */ r(or, { size: 13 }),
                              /* @__PURE__ */ r("span", { className: "sr-only", children: h ? "Location" : "Localisation" })
                            ] }),
                            /* @__PURE__ */ r("dd", { children: F.city })
                          ] }),
                          /* @__PURE__ */ l("div", { children: [
                            /* @__PURE__ */ l("dt", { children: [
                              /* @__PURE__ */ r(je, { size: 13 }),
                              /* @__PURE__ */ r("span", { className: "sr-only", children: h ? "Due date" : "Échéance" })
                            ] }),
                            /* @__PURE__ */ r("dd", { children: F.date })
                          ] }),
                          /* @__PURE__ */ l("div", { children: [
                            /* @__PURE__ */ l("dt", { children: [
                              F.amountLabel ? /* @__PURE__ */ r(ei, { size: 13 }) : /* @__PURE__ */ r(ls, { size: 13 }),
                              /* @__PURE__ */ r("span", { className: "sr-only", children: h ? "Amount" : "Montant" })
                            ] }),
                            /* @__PURE__ */ r("dd", { children: F.amountLabel ?? new Intl.NumberFormat(d, { style: "currency", currency: c, maximumFractionDigits: 0 }).format(F.amount) })
                          ] })
                        ] })
                      ] }),
                      /* @__PURE__ */ l("footer", { children: [
                        /* @__PURE__ */ r(
                          "span",
                          {
                            className: e ? $ === "Signé" ? "is-positive" : $ === "À signer" ? "is-warning" : "" : F.probability > 75 ? "is-positive" : F.status === "À suivre" ? "is-warning" : "",
                            children: e ? $ : F.status
                          }
                        ),
                        /* @__PURE__ */ l("small", { className: "kb-card-owner", children: [
                          e && F.avatarSrc && /* @__PURE__ */ r("img", { src: F.avatarSrc, alt: "", draggable: !1 }),
                          " ",
                          F.ownerName ?? F.owner
                        ] })
                      ] })
                    ]
                  },
                  F.id
                )
              ] }, F.id)),
              (w == null ? void 0 : w.stage) === $ && w.before === null && /* @__PURE__ */ r(re.div, { layout: !T, className: "kb-placeholder", style: { height: w.height }, children: /* @__PURE__ */ r("span", { children: h ? "Drop here" : "Déposer ici" }) }),
              !B.length && (w == null ? void 0 : w.stage) !== $ && /* @__PURE__ */ r("div", { className: "kb-empty", children: o ? h ? "No records at this stage" : "Aucun dossier à cette étape" : h ? e ? "Drop a document here" : "Drop a record here" : e ? "Déposez un document ici" : "Déposez un dossier ici" })
            ] })
          ]
        },
        $
      );
    }) }),
    /* @__PURE__ */ r("p", { className: "kb-help", children: o ? h ? "Open a card to review its next action." : "Ouvrez une carte pour consulter sa prochaine action." : h ? "Drag cards between stages, or use the card menu." : "Glissez uniquement les cartes. Les en-têtes et les totaux restent fixes pendant le dépôt." }),
    /* @__PURE__ */ r("span", { className: "sr-only", role: "status", children: D })
  ] });
}
function zf({
  label: e = "Dossiers qualifiés",
  value: t = 38,
  delta: n = 6,
  deltaLabel: i = "dossiers",
  total: a = 42,
  detail: o,
  progress: s,
  tone: c = "blue",
  icon: d,
  loading: p = !1,
  progressLabel: h,
  showProgress: f = !0
}) {
  const u = typeof t == "number" ? t : 0, g = s ?? (a > 0 ? u / a * 100 : 0), m = Math.min(100, Math.max(0, g)), v = typeof t == "number" ? Math.min(a, Math.max(0, u)) : m / 100 * a;
  return /* @__PURE__ */ l(
    "div",
    {
      className: `kpi-shell ${p ? "loading" : ""}`,
      "data-tone": c,
      "aria-busy": p,
      children: [
        /* @__PURE__ */ l("div", { className: "kpi-heading", children: [
          d ?? /* @__PURE__ */ r(bs, { size: 22, strokeWidth: 1.5, "aria-hidden": "true" }),
          /* @__PURE__ */ r("span", { children: e })
        ] }),
        /* @__PURE__ */ l("div", { className: "kpi-body", children: [
          p ? /* @__PURE__ */ r("div", { className: "kpi-skeleton" }) : /* @__PURE__ */ l("div", { className: "kpi-values", children: [
            /* @__PURE__ */ r(
              re.strong,
              {
                initial: { opacity: 0, y: 5 },
                animate: { opacity: 1, y: 0 },
                children: t
              }
            ),
            n !== null && /* @__PURE__ */ l("span", { className: `kpi-delta ${n < 0 ? "negative" : ""}`, children: [
              n < 0 ? /* @__PURE__ */ r(Kt, { size: 16, "aria-hidden": "true" }) : /* @__PURE__ */ r(qt, { size: 16, "aria-hidden": "true" }),
              " ",
              Math.abs(n),
              " ",
              /* @__PURE__ */ r("span", { children: i })
            ] })
          ] }),
          f && /* @__PURE__ */ l(q, { children: [
            /* @__PURE__ */ r("div", { className: "kpi-divider" }),
            /* @__PURE__ */ r(
              "div",
              {
                className: "hatched-track",
                role: "progressbar",
                "aria-label": h ?? e,
                "aria-valuemin": 0,
                "aria-valuemax": a,
                "aria-valuenow": Math.round(v),
                children: /* @__PURE__ */ r(
                  re.div,
                  {
                    animate: { width: `${m}%` },
                    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ r("p", { children: p ? "Chargement…" : o ?? `${Math.max(0, a - u)} dossiers à qualifier sur ${a}` })
        ] })
      ]
    }
  );
}
var uh = Object.defineProperty, hh = (e, t) => uh(e, "name", { value: t, configurable: !0 }), fh = "Toggle", ph = /* @__PURE__ */ b.forwardRef(
  /* @__PURE__ */ hh(function(t, n) {
    const { pressed: i, defaultPressed: a, onPressedChange: o, ...s } = t, [c, d] = et({
      prop: i,
      onChange: o,
      defaultProp: a ?? !1,
      caller: fh
    });
    return /* @__PURE__ */ r(
      le.button,
      {
        type: "button",
        "aria-pressed": c,
        "data-state": c ? "on" : "off",
        "data-disabled": t.disabled ? "" : void 0,
        ...s,
        ref: n,
        onClick: Y(t.onClick, () => {
          t.disabled || d(!c);
        })
      }
    );
  }, "Toggle")
), mh = Object.defineProperty, Ge = (e, t) => mh(e, "name", { value: t, configurable: !0 }), kt = "ToggleGroup", [Vo, Bf] = /* @__PURE__ */ Le(kt, [
  vn
]), Wo = vn(), vh = /* @__PURE__ */ b.forwardRef(/* @__PURE__ */ Ge(function(t, n) {
  const { type: i, ...a } = t;
  if (i === "single")
    return /* @__PURE__ */ r(gh, { role: "radiogroup", ...a, ref: n });
  if (i === "multiple")
    return /* @__PURE__ */ r(bh, { role: "toolbar", ...a, ref: n });
  throw new Error(`Missing prop \`type\` expected on \`${kt}\``);
}, "ToggleGroup")), [Ho, Go] = Vo(kt), gh = /* @__PURE__ */ b.forwardRef(/* @__PURE__ */ Ge(function(t, n) {
  const {
    value: i,
    defaultValue: a,
    onValueChange: o = /* @__PURE__ */ Ge(() => {
    }, "onValueChange"),
    ...s
  } = t, [c, d] = et({
    prop: i,
    defaultProp: a ?? "",
    onChange: o,
    caller: kt
  });
  return /* @__PURE__ */ r(
    Ho,
    {
      scope: t.__scopeToggleGroup,
      type: "single",
      value: b.useMemo(() => c ? [c] : [], [c]),
      onItemActivate: d,
      onItemDeactivate: b.useCallback(() => d(""), [d]),
      children: /* @__PURE__ */ r(Uo, { ...s, ref: n })
    }
  );
}, "ToggleGroupImplSingle")), bh = /* @__PURE__ */ b.forwardRef(/* @__PURE__ */ Ge(function(t, n) {
  const {
    value: i,
    defaultValue: a,
    onValueChange: o = /* @__PURE__ */ Ge(() => {
    }, "onValueChange"),
    ...s
  } = t, [c, d] = et({
    prop: i,
    defaultProp: a ?? [],
    onChange: o,
    caller: kt
  }), p = b.useCallback(
    (f) => d((u = []) => [...u, f]),
    [d]
  ), h = b.useCallback(
    (f) => d((u = []) => u.filter((g) => g !== f)),
    [d]
  );
  return /* @__PURE__ */ r(
    Ho,
    {
      scope: t.__scopeToggleGroup,
      type: "multiple",
      value: c,
      onItemActivate: p,
      onItemDeactivate: h,
      children: /* @__PURE__ */ r(Uo, { ...s, ref: n })
    }
  );
}, "ToggleGroupImplMultiple")), [yh, wh] = Vo(kt), Uo = /* @__PURE__ */ b.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ge(function(t, n) {
    const {
      __scopeToggleGroup: i,
      disabled: a = !1,
      rovingFocus: o = !0,
      orientation: s,
      dir: c,
      loop: d = !0,
      ...p
    } = t, h = Wo(i), f = an(c), u = { dir: f, ...p };
    return /* @__PURE__ */ r(yh, { scope: i, rovingFocus: o, disabled: a, children: o ? /* @__PURE__ */ r(
      ao,
      {
        asChild: !0,
        ...h,
        orientation: s,
        dir: f,
        loop: d,
        children: /* @__PURE__ */ r(le.div, { ...u, ref: n })
      }
    ) : /* @__PURE__ */ r(le.div, { ...u, ref: n }) });
  }, "ToggleGroupImpl")
), nr = "ToggleGroupItem", xh = /* @__PURE__ */ b.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ge(function(t, n) {
    const i = Go(nr, t.__scopeToggleGroup), a = wh(nr, t.__scopeToggleGroup), o = Wo(t.__scopeToggleGroup), s = i.value.includes(t.value), c = a.disabled || t.disabled, d = { ...t, pressed: s, disabled: c }, p = b.useRef(null);
    return a.rovingFocus ? /* @__PURE__ */ r(
      oo,
      {
        asChild: !0,
        ...o,
        focusable: !c,
        active: s,
        ref: p,
        children: /* @__PURE__ */ r(Ai, { ...d, ref: n })
      }
    ) : /* @__PURE__ */ r(Ai, { ...d, ref: n });
  }, "ToggleGroupItem")
), Ai = /* @__PURE__ */ b.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ge(function(t, n) {
    const { __scopeToggleGroup: i, value: a, ...o } = t, s = Go(nr, i), c = { role: "radio", "aria-checked": t.pressed, "aria-pressed": void 0 }, d = s.type === "single" ? c : void 0;
    return /* @__PURE__ */ r(
      ph,
      {
        ...d,
        ...o,
        ref: n,
        onPressedChange: (p) => {
          p ? s.onItemActivate(a) : s.onItemDeactivate(a);
        }
      }
    );
  }, "ToggleGroupItemImpl")
);
function jf({
  value: e,
  onChange: t,
  listLabel: n = "Liste",
  boardLabel: i = "Kanban",
  items: a,
  label: o = "Présentation des dossiers"
}) {
  const s = ue();
  return /* @__PURE__ */ r(
    vh,
    {
      type: "single",
      value: e,
      onValueChange: (c) => c && t(c),
      className: "view-selector",
      "aria-label": o,
      children: (a ?? [
        { id: "list", name: n, icon: /* @__PURE__ */ r(Ui, { size: 18, strokeWidth: 1.7 }) },
        { id: "board", name: i, icon: /* @__PURE__ */ r(fs, { size: 18, strokeWidth: 1.7 }) }
      ]).map((c) => /* @__PURE__ */ l(
        xh,
        {
          value: c.id,
          "aria-label": c.name,
          title: c.name,
          children: [
            e === c.id && /* @__PURE__ */ r(
              re.span,
              {
                layoutId: s,
                className: "selection-surface",
                transition: { type: "spring", stiffness: 480, damping: 36 }
              }
            ),
            c.icon
          ]
        },
        c.id
      ))
    }
  );
}
function Vf({
  title: e = "De la rencontre à la signature",
  meta: t = "Cohorte active",
  stages: n,
  locale: i = "fr",
  compact: a = !1,
  expanded: o = !1,
  showSummary: s = !0,
  showInspector: c = !0,
  summaryLabel: d = "dossiers convertis",
  caption: p = "Même cohorte · étapes cumulatives.",
  fixture: h = "Données fictives",
  emptyLabel: f = "Aucune donnée sur cette période"
}) {
  var E, T;
  const u = Z(null), [g, m] = H(552);
  ce(() => {
    const R = u.current;
    if (!R) return;
    const O = new ResizeObserver(([L]) => m(Math.max(240, L.contentRect.width)));
    return O.observe(R), () => O.disconnect();
  }, [n.length]);
  const v = a ? 86 : o ? 145 : 120, y = a ? 62 : o ? 105 : 82, w = a ? 190 : o ? 320 : 245, [x, k] = H(null);
  ce(() => {
    x !== null && x >= n.length && k(null);
  }, [x, n.length]);
  const M = n.map((R) => Math.max(0, R.value)), P = Math.max(1, ...M), S = ["var(--bm-chart-fifth,#9dceff)", "var(--bm-chart-third,#73b4fd)", "var(--bm-accent)", "var(--bm-action)"], D = x === null ? null : n[x];
  return /* @__PURE__ */ l("section", { className: "bm-chart-shell bm-pipeline-chart", "data-compact": a, "aria-label": e, children: [
    /* @__PURE__ */ l("header", { className: "bm-chart-heading", children: [
      /* @__PURE__ */ l("span", { children: [
        /* @__PURE__ */ r(Vi, { size: 17, "aria-hidden": "true" }),
        e
      ] }),
      /* @__PURE__ */ l("span", { className: "bm-chart-date", children: [
        /* @__PURE__ */ r(je, { size: 13, "aria-hidden": "true" }),
        t
      ] })
    ] }),
    /* @__PURE__ */ l("div", { className: "bm-chart-body", children: [
      s && /* @__PURE__ */ r("div", { className: "bm-chart-summary", children: /* @__PURE__ */ l("div", { children: [
        /* @__PURE__ */ r("strong", { children: ((E = n.at(-1)) == null ? void 0 : E.value) ?? "—" }),
        /* @__PURE__ */ l("span", { children: [
          d,
          " ",
          i === "en" ? "of" : "sur",
          " ",
          ((T = n[0]) == null ? void 0 : T.value) ?? 0
        ] })
      ] }) }),
      n.length ? /* @__PURE__ */ l("div", { className: "bm-chart-plot", ref: u, children: [
        c && /* @__PURE__ */ r("div", { className: `bm-chart-tooltip ${D ? "is-visible" : ""}`, role: "status", "aria-live": "polite", children: D ? `${D.label} · ${D.value} ${i === "en" ? "records" : "dossiers"} · ${Math.round(M[x] / P * 100)} %` : i === "en" ? "Hover or focus a stage to inspect conversion." : "Survolez un point ou utilisez Tab pour explorer." }),
        /* @__PURE__ */ l("svg", { viewBox: `0 0 ${g} ${w}`, role: "group", "aria-label": n.map((R) => `${R.label}: ${R.value}`).join(", "), children: [
          /* @__PURE__ */ r("line", { x1: "12", y1: v, x2: g - 12, y2: v, stroke: "#e5e7eb", strokeDasharray: "3 5" }),
          n.map((R, O) => {
            const L = (g - 24) / n.length, N = 12 + O * L, _ = N + L, j = M[O] / P * y, G = (M[O + 1] ?? M[O]) / P * y, C = `M ${N} ${v - j} C ${N + L / 2} ${v - j}, ${_ - L / 2} ${v - G}, ${_} ${v - G} L ${_} ${v + G} C ${_ - L / 2} ${v + G}, ${N + L / 2} ${v + j}, ${N} ${v + j} Z`, I = Math.round(M[O] / P * 100);
            return /* @__PURE__ */ l("g", { tabIndex: 0, role: "img", "aria-label": `${R.label}: ${R.value} ${i === "en" ? "records" : "dossiers"}, ${I}%`, className: "bm-chart-point", onMouseEnter: () => k(O), onMouseLeave: () => k(null), onFocus: () => k(O), onBlur: () => k(null), children: [
              /* @__PURE__ */ r("path", { d: C, fill: R.color ?? S[O % S.length], opacity: x === null || x === O ? 1 : 0.42, stroke: "white", strokeWidth: "2" }),
              /* @__PURE__ */ r("rect", { x: N + L / 2 - 23, y: v - 12, width: "46", height: "24", rx: "12", fill: "white", fillOpacity: ".96" }),
              /* @__PURE__ */ l("text", { x: N + L / 2, y: v + 4, textAnchor: "middle", className: "bm-chart-percent", children: [
                I,
                "%"
              ] }),
              /* @__PURE__ */ r("text", { x: N + L / 2, y: w - 12, textAnchor: "middle", children: R.label }),
              /* @__PURE__ */ r("rect", { className: "bm-chart-focus", x: N + 2, y: v - y - 6, width: Math.max(1, L - 4), height: y * 2 + 12, rx: "7" })
            ] }, `${R.label}-${O}`);
          })
        ] })
      ] }) : /* @__PURE__ */ l("div", { className: "bm-chart-empty", children: [
        /* @__PURE__ */ r("strong", { children: f }),
        /* @__PURE__ */ r("p", { children: "Les étapes apparaîtront ici dès que la cohorte sera disponible." })
      ] }),
      /* @__PURE__ */ l("footer", { className: "bm-chart-legend", children: [
        /* @__PURE__ */ r("span", { children: p }),
        /* @__PURE__ */ r("span", { className: "bm-chart-fixture", children: h })
      ] })
    ] })
  ] });
}
function zr({ children: e, enabled: t = !0 }) {
  const [n, i] = H(null), a = ue();
  ce(() => {
    const s = () => i(null), c = () => {
      var p;
      (p = document.activeElement) != null && p.matches("[data-chart-title]") ? o(document.activeElement) : s();
    }, d = (p) => {
      p.key === "Escape" && s();
    };
    return window.addEventListener("scroll", c, !0), window.addEventListener("resize", s), window.addEventListener("keydown", d), () => {
      window.removeEventListener("scroll", c, !0), window.removeEventListener("resize", s), window.removeEventListener("keydown", d);
    };
  }, [t]);
  function o(s, c) {
    const d = s instanceof Element ? s.closest("[data-chart-title]") : null;
    if (!t || !d) {
      i(null);
      return;
    }
    const p = d.getBoundingClientRect();
    i({ title: d.dataset.chartTitle, value: d.dataset.chartValue, detail: d.dataset.chartDetail || "", color: d.dataset.chartColor || "#2786ef", x: Math.max(12, Math.min(((c == null ? void 0 : c.x) ?? p.x + p.width / 2) + 14, window.innerWidth - 232)), y: Math.max(12, Math.min(((c == null ? void 0 : c.y) ?? p.y) - 112, window.innerHeight - 112)) });
  }
  return /* @__PURE__ */ l("div", { className: "chart-tooltip-area", onMouseMove: (s) => o(s.target, { x: s.clientX, y: s.clientY }), onMouseLeave: () => i(null), onFocusCapture: (s) => o(s.target), onBlurCapture: () => i(null), children: [
    e,
    t && n && rs(/* @__PURE__ */ l("div", { id: a, className: "chart-floating-tip", role: "tooltip", style: { left: n.x, top: n.y }, children: [
      /* @__PURE__ */ r("div", { className: "chart-tip-title", children: n.title }),
      /* @__PURE__ */ l("div", { className: "chart-tip-value", children: [
        /* @__PURE__ */ r("i", { style: { background: n.color } }),
        /* @__PURE__ */ r("strong", { children: n.value })
      ] }),
      n.detail && /* @__PURE__ */ r("div", { className: "chart-tip-detail", children: n.detail })
    ] }), document.body)
  ] });
}
function Ko() {
  const e = Z(null), [t, n] = H(600), [i, a] = H(210);
  return ce(() => {
    const o = e.current;
    if (!o) return;
    const s = new ResizeObserver(([c]) => {
      n(Math.max(280, c.contentRect.width)), a(Math.max(210, c.contentRect.height));
    });
    return s.observe(o), () => s.disconnect();
  }, []), { ref: e, width: t, height: i };
}
function Br({ title: e, meta: t, value: n, caption: i, children: a, legend: o }) {
  return /* @__PURE__ */ l("section", { className: "bm-chart-shell bm-shared-chart", children: [
    /* @__PURE__ */ l("header", { className: "bm-chart-heading", children: [
      /* @__PURE__ */ l("span", { children: [
        /* @__PURE__ */ r(Vi, { size: 17 }),
        e
      ] }),
      t && /* @__PURE__ */ r("span", { className: "bm-chart-date", children: t })
    ] }),
    /* @__PURE__ */ l("div", { className: "bm-chart-body", children: [
      n != null && /* @__PURE__ */ r("div", { className: "bm-chart-summary", children: /* @__PURE__ */ l("div", { children: [
        /* @__PURE__ */ r("strong", { children: n }),
        /* @__PURE__ */ r("span", { children: i })
      ] }) }),
      a,
      o && /* @__PURE__ */ r("footer", { className: "bm-chart-legend", children: o })
    ] })
  ] });
}
function Wf({ title: e, rows: t, series: n, unit: i = "", summary: a, caption: o, selected: s, onSelect: c, compact: d = !1, depth: p = !1 }) {
  const h = Ko(), [f, u] = H(null), g = ue().replace(/:/g, ""), m = Math.max(1, ...t.flatMap((E) => E.values)), v = 10 ** Math.floor(Math.log10(m)), y = Math.ceil(m / v) * v, w = 20, x = 180, k = 36, M = h.width - 48, P = M / Math.max(1, t.length), S = Math.max(4, Math.min(30, (P - 16) / n.length)), D = (E) => x - E / y * (x - w);
  return /* @__PURE__ */ r(Br, { title: e, meta: i, value: a, caption: o, legend: n.map((E, T) => /* @__PURE__ */ l("span", { children: [
    /* @__PURE__ */ r("i", { style: { background: T === 0 ? "var(--bm-action)" : "var(--bm-accent)" } }),
    E
  ] }, E)), children: /* @__PURE__ */ r("div", { ref: h.ref, className: "bm-chart-plot", "data-compact": d, children: /* @__PURE__ */ r(zr, { children: /* @__PURE__ */ l("svg", { viewBox: `0 0 ${h.width} 220`, role: "group", "aria-label": e, children: [
    /* @__PURE__ */ r("defs", { children: /* @__PURE__ */ l("pattern", { id: g, width: "7", height: "7", patternUnits: "userSpaceOnUse", patternTransform: "rotate(45)", children: [
      /* @__PURE__ */ r("rect", { width: "7", height: "7", fill: "var(--bm-accent-soft)" }),
      /* @__PURE__ */ r("rect", { width: "3", height: "7", fill: "var(--bm-accent)", opacity: ".6" })
    ] }) }),
    [...new Set([0, 1, 2, 3, 4].map((E) => y <= 4 && t.every((T) => T.values.every(Number.isInteger)) ? Math.round(y * E / 4) : y * E / 4))].map((E) => /* @__PURE__ */ l("g", { children: [
      /* @__PURE__ */ r("line", { x1: k, x2: k + M, y1: D(E), y2: D(E), stroke: "var(--bm-border)", strokeDasharray: "3 6" }),
      /* @__PURE__ */ r("text", { x: k - 12, y: D(E) + 4, textAnchor: "end", children: E.toLocaleString("en", { maximumFractionDigits: 1 }) })
    ] }, E)),
    t.map((E, T) => {
      const R = k + P * (T + 0.5);
      return /* @__PURE__ */ l("g", { className: "bm-chart-point", role: c ? "button" : "img", tabIndex: 0, "aria-pressed": c ? s === E.id : void 0, "aria-label": `${E.label}: ${E.values.map((O, L) => `${n[L]} ${O} ${i}`).join(", ")}`, "data-chart-color": "var(--bm-accent)", "data-chart-title": E.label, "data-chart-value": E.values.map((O, L) => `${n[L]} ${O.toFixed(1)}`).join(" · "), "data-chart-detail": i, onClick: () => c == null ? void 0 : c(E.id), onKeyDown: (O) => {
        c && (O.key === "Enter" || O.key === " ") && (O.preventDefault(), c(E.id));
      }, onMouseEnter: () => u(E.id), onMouseLeave: () => u(null), onFocus: () => u(E.id), onBlur: () => u(null), children: [
        E.values.map((O, L) => {
          const N = R - n.length * S / 2 + L * S + 2, _ = Math.max(2, S - 4), j = D(O), G = L === 0 ? "var(--bm-action)" : s === E.id ? `url(#${g})` : "var(--bm-accent)", C = Math.min(8, _ * 0.47);
          return /* @__PURE__ */ r("g", { opacity: f && f !== E.id ? 0.4 : 1, children: p && O > 0 ? /* @__PURE__ */ l(q, { children: [
            /* @__PURE__ */ r("path", { d: `M${N} ${j - C} L${N + _ / 2} ${j} V${x} L${N} ${x - C}Z`, fill: G }),
            /* @__PURE__ */ r("path", { d: `M${N + _ / 2} ${j} L${N + _} ${j - C} V${x - C} L${N + _ / 2} ${x}Z`, fill: G }),
            /* @__PURE__ */ r("path", { d: `M${N + _ / 2} ${j} L${N + _} ${j - C} V${x - C} L${N + _ / 2} ${x}Z`, fill: "black", opacity: ".18" }),
            /* @__PURE__ */ r("path", { d: `M${N} ${j - C} L${N + _ / 2} ${j - 2 * C} L${N + _} ${j - C} L${N + _ / 2} ${j}Z`, fill: G }),
            /* @__PURE__ */ r("path", { d: `M${N} ${j - C} L${N + _ / 2} ${j - 2 * C} L${N + _} ${j - C} L${N + _ / 2} ${j}Z`, fill: "white", opacity: ".3" }),
            /* @__PURE__ */ r("path", { d: `M${N + _ / 2} ${j} V${x}`, stroke: "white", strokeOpacity: ".35", strokeWidth: ".7" })
          ] }) : /* @__PURE__ */ r("rect", { x: N, y: j, width: _, height: Math.max(0, x - j), rx: 5, fill: G }) }, L);
        }),
        /* @__PURE__ */ r("text", { x: R, y: x + 24, textAnchor: "middle", style: { fontWeight: s === E.id ? 600 : 400, fill: s === E.id ? "var(--bm-accent-ink)" : void 0 }, children: d && P < 100 && E.label.includes(" ") ? /* @__PURE__ */ l(q, { children: [
          /* @__PURE__ */ r("tspan", { x: R, children: E.label.split(" ")[0] }),
          /* @__PURE__ */ r("tspan", { x: R, dy: "12", children: E.label.split(" ").slice(1).join(" ") })
        ] }) : E.label })
      ] }, E.id);
    })
  ] }) }) }) });
}
function kh({ title: e, rows: t, unit: n = "%", caption: i = "Total", compact: a = !1 }) {
  var f;
  const [o, s] = H(null), c = t.reduce((u, g) => u + g.value, 0), d = ["var(--bm-action)", "var(--bm-accent)", "var(--bm-chart-third,#6a9ca7)", "var(--bm-chart-fourth,#a7c4cc)", "var(--bm-chart-fifth,#d1e1e5)"];
  let p = 0;
  const h = t.map((u) => p += u.value);
  return /* @__PURE__ */ r(Br, { title: e, legend: /* @__PURE__ */ l("span", { children: [
    i,
    " · ",
    c,
    n === "%" ? n : ` ${n}`
  ] }), children: /* @__PURE__ */ l("div", { className: "bm-donut-layout", "data-compact": a, children: [
    /* @__PURE__ */ l("svg", { viewBox: "20 20 200 200", role: "img", "aria-label": t.map((u) => `${u.label}: ${u.value}${n}`).join(", "), children: [
      Array.from({ length: 100 }, (u, g) => {
        const m = (g * 3.6 - 90) * Math.PI / 180, v = h.findIndex((y) => (g + 0.5) * c / 100 < y);
        return /* @__PURE__ */ r("line", { x1: 120 + 72 * Math.cos(m), y1: 120 + 72 * Math.sin(m), x2: 120 + 93 * Math.cos(m), y2: 120 + 93 * Math.sin(m), stroke: c ? d[Math.max(0, v) % d.length] : "var(--bm-border)", strokeWidth: "3", strokeLinecap: "round", opacity: o === null || o === v ? 1 : 0.15 }, g);
      }),
      /* @__PURE__ */ l("text", { x: "120", y: "120", textAnchor: "middle", className: "bm-donut-total", children: [
        o === null ? c : (f = t[o]) == null ? void 0 : f.value,
        n === "%" ? n : ""
      ] }),
      /* @__PURE__ */ r("text", { x: "120", y: "143", textAnchor: "middle", children: o === null ? i : t[o].label })
    ] }),
    /* @__PURE__ */ r("div", { className: "bm-donut-legend", children: t.map((u, g) => /* @__PURE__ */ l("button", { type: "button", "aria-pressed": o === g, onMouseEnter: () => s(g), onMouseLeave: () => s(null), onFocus: () => s(g), onBlur: () => s(null), onClick: () => s(o === g ? null : g), children: [
      /* @__PURE__ */ r("i", { style: { background: d[g % d.length] } }),
      /* @__PURE__ */ r("span", { children: u.label }),
      /* @__PURE__ */ l("strong", { children: [
        u.value,
        n === "%" ? n : ""
      ] })
    ] }, u.label)) })
  ] }) });
}
function Hf({ title: e, rows: t, unit: n = "%", caption: i }) {
  const a = Ko(), o = ue().replace(/:/g, ""), s = Math.min(0, ...t.map((v) => v.value)), c = Math.max(1, ...t.map((v) => v.value)) * 1.15, d = 36, p = a.width - 20, h = 16, f = a.height - 40, u = (v) => t.length === 1 ? (d + p) / 2 : d + v * (p - d) / Math.max(1, t.length - 1), g = (v) => f - (v - s) / (c - s) * (f - h), m = t.map((v, y) => `${y ? "L" : "M"}${u(y)},${g(v.value)}`).join(" ");
  return /* @__PURE__ */ r(Br, { title: e, meta: n, legend: i && /* @__PURE__ */ r("span", { children: i }), children: /* @__PURE__ */ r("div", { ref: a.ref, className: "bm-trend-plot", children: /* @__PURE__ */ r(zr, { children: /* @__PURE__ */ l("svg", { viewBox: `0 0 ${a.width} ${a.height}`, role: "group", "aria-label": e, children: [
    /* @__PURE__ */ r("defs", { children: /* @__PURE__ */ l("linearGradient", { id: o, x1: "0", y1: "0", x2: "0", y2: "1", children: [
      /* @__PURE__ */ r("stop", { stopColor: "var(--bm-accent)", stopOpacity: ".2" }),
      /* @__PURE__ */ r("stop", { offset: "1", stopColor: "var(--bm-accent)", stopOpacity: "0" })
    ] }) }),
    [0, 1, 2, 3].map((v) => {
      const y = s + (c - s) * v / 3;
      return /* @__PURE__ */ l("g", { children: [
        /* @__PURE__ */ r("line", { x1: d, x2: p, y1: g(y), y2: g(y), stroke: "var(--bm-border)", strokeDasharray: "3 6" }),
        /* @__PURE__ */ r("text", { x: d - 8, y: g(y) + 3, textAnchor: "end", children: y.toFixed(0) })
      ] }, v);
    }),
    t.length > 0 && /* @__PURE__ */ l(q, { children: [
      /* @__PURE__ */ r("path", { d: `${m} L${u(t.length - 1)},${f} L${u(0)},${f} Z`, fill: `url(#${o})` }),
      /* @__PURE__ */ r("path", { d: m, fill: "none", stroke: "var(--bm-accent)", strokeWidth: "2", strokeLinejoin: "round" })
    ] }),
    t.map((v, y) => /* @__PURE__ */ l("g", { children: [
      /* @__PURE__ */ r("circle", { cx: u(y), cy: g(v.value), r: "4", fill: "var(--bm-surface)", stroke: "var(--bm-accent)", strokeWidth: "2", tabIndex: 0, role: "img", "aria-label": `${v.label}: ${v.value}${n}`, "data-chart-title": v.label, "data-chart-value": `${v.value.toFixed(1)}${n}`, "data-chart-detail": v.detail, "data-chart-color": "var(--bm-accent)" }),
      (y === 0 || y === t.length - 1 || y % Math.max(1, Math.ceil(t.length / 5)) === 0) && /* @__PURE__ */ r("text", { x: u(y), y: a.height - 14, textAnchor: y === 0 ? "start" : y === t.length - 1 ? "end" : "middle", children: v.label })
    ] }, v.label))
  ] }) }) }) });
}
const Ch = ["Pixels", "Miroir", "Répartition", "Nuage", "Modèles", "Catégories", "Objectif", "Canaux", "Livraisons"], $i = ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"], Xe = ["#567bf2", "#9367d7", "#e79746", "#4ca99b"], Di = [{ name: "Production", value: 50 }, { name: "Staging", value: 20 }, { name: "Développement", value: 15 }, { name: "Tests", value: 15 }];
function Mh({ mode: e, empty: t }) {
  const [n, i] = H(""), [a, o] = H(null), [s, c] = H(!1), d = ue().replace(/:/g, ""), p = (h) => ({ tabIndex: 0, onFocus: () => i(h), onBlur: () => i(""), onMouseEnter: () => i(h), onMouseLeave: () => i("") });
  return /* @__PURE__ */ l("section", { className: "bm-chart-shell bm-detailed", children: [
    /* @__PURE__ */ l("header", { className: "bm-chart-heading", children: [
      e,
      /* @__PURE__ */ r("span", { className: "bm-chart-date", children: "Données fictives · 2026" })
    ] }),
    /* @__PURE__ */ l("div", { className: "bm-chart-body", children: [
      /* @__PURE__ */ r("div", { className: "bm-extra-tip", role: "status", children: n || "Survolez une valeur ou parcourez avec Tab." }),
      t ? /* @__PURE__ */ r("div", { className: "bm-chart-empty", children: /* @__PURE__ */ r("strong", { children: "Aucune donnée sur cette période" }) }) : /* @__PURE__ */ l(q, { children: [
        e === "Pixels" && /* @__PURE__ */ l("svg", { viewBox: "0 0 600 275", role: "group", "aria-label": "Histogramme en carrés", children: [
          /* @__PURE__ */ r("text", { x: "35", y: "15", children: "Dossiers · 1 carré = 1 dossier" }),
          [0, 5, 10, 15, 20].map((h) => /* @__PURE__ */ r("text", { x: "25", y: 233 - h * 10.5, textAnchor: "end", children: h }, h)),
          $i.map((h, f) => {
            const u = [6, 9, 8, 5, 9, 11, 13, 10, 12, 14, 10, 15][f], g = [4, 3, 5, 4, 6, 5, 4, 6, 4, 3, 5, 4][f];
            return /* @__PURE__ */ l("g", { ...p(h + " : " + u + " finalisés, " + g + " en cours, " + (u + g) + " reçus"), className: "bm-chart-point", children: [
              Array.from({ length: 20 }, (m, v) => /* @__PURE__ */ r("rect", { x: 40 + f * 45, y: 225 - v * 10.5, width: "31", height: "8", rx: "1", fill: v < u ? "#303843" : v < u + g ? "#a9b2be" : "#f0f2f4" }, v)),
              /* @__PURE__ */ r("text", { x: 55 + f * 45, y: "256", textAnchor: "middle", children: h }),
              /* @__PURE__ */ r("rect", { className: "bm-chart-focus", x: 36 + f * 45, y: "23", width: "40", height: "216", rx: "3" })
            ] }, h);
          })
        ] }),
        e === "Miroir" && /* @__PURE__ */ l("svg", { viewBox: "0 0 600 290", role: "group", "aria-label": "Trésorerie mensuelle, entrées positives sorties négatives", children: [
          /* @__PURE__ */ r("text", { x: "42", y: "15", children: "k€" }),
          [-40, -20, 0, 20, 40].map((h) => /* @__PURE__ */ l("g", { children: [
            /* @__PURE__ */ r("line", { x1: "42", x2: "575", y1: 140 - h * 2.4, y2: 140 - h * 2.4, stroke: h === 0 ? "#8d9aa9" : "#e8edf1" }),
            /* @__PURE__ */ r("text", { x: "30", y: 144 - h * 2.4, textAnchor: "end", children: h })
          ] }, h)),
          $i.map((h, f) => {
            const u = [20, 25, 23, 30, 34, 28, 36, 31, 39, 35, 32, 40][f], g = [15, 19, 18, 22, 26, 21, 28, 24, 29, 26, 25, 31][f];
            return /* @__PURE__ */ l("g", { ...p(h + " : entrées " + u + " k€, sorties −" + g + " k€, solde +" + (u - g) + " k€"), className: "bm-chart-point", children: [
              /* @__PURE__ */ r("rect", { x: 48 + f * 44, y: 140 - u * 2.4, width: "23", height: u * 2.4, rx: "3", fill: "#4ca9b9" }),
              /* @__PURE__ */ r("rect", { x: 48 + f * 44, y: "140", width: "23", height: g * 2.4, rx: "3", fill: "#b7dce3" }),
              /* @__PURE__ */ r("text", { x: 59 + f * 44, y: "270", textAnchor: "middle", children: h })
            ] }, h);
          })
        ] }),
        e === "Répartition" && /* @__PURE__ */ l("div", { children: [
          /* @__PURE__ */ l("div", { className: "bm-detailed-summary", children: [
            /* @__PURE__ */ l("strong", { children: [
              "100 ",
              /* @__PURE__ */ r("small", { children: "requêtes" })
            ] }),
            /* @__PURE__ */ r("button", { type: "button", onClick: () => c((h) => !h), children: s ? "Afficher les nombres" : "Afficher les pourcentages" })
          ] }),
          /* @__PURE__ */ r("div", { className: "bm-detailed-segments", role: "img", "aria-label": "100 requêtes : Production 50, Staging 20, Développement 15, Tests 15", children: Di.flatMap((h, f) => Array.from({ length: h.value }, (u, g) => /* @__PURE__ */ r("i", { style: { background: Xe[f], opacity: a === null || a === f ? 1 : 0.16 } }, f + "-" + g))) }),
          /* @__PURE__ */ r("div", { className: "bm-detailed-legend", children: Di.map((h, f) => /* @__PURE__ */ l("button", { type: "button", "aria-pressed": a === f, onClick: () => o(a === f ? null : f), children: [
            /* @__PURE__ */ r("i", { style: { background: Xe[f] } }),
            h.name,
            /* @__PURE__ */ l("strong", { children: [
              h.value,
              s ? " %" : ""
            ] })
          ] }, h.name)) }),
          /* @__PURE__ */ r("p", { children: "Cliquez une légende pour isoler sa contribution." })
        ] }),
        e === "Nuage" && /* @__PURE__ */ l("svg", { viewBox: "0 0 600 290", role: "group", "aria-label": "Offres : prix mensuel en euros et capacité dossiers par mois", children: [
          [0, 50, 100, 150, 200].map((h) => /* @__PURE__ */ l("g", { children: [
            /* @__PURE__ */ r("line", { x1: "48", x2: "562", y1: 240 - h, y2: 240 - h, stroke: "#e8edf1", strokeDasharray: "3 5" }),
            /* @__PURE__ */ r("text", { x: "35", y: 244 - h, textAnchor: "end", children: h })
          ] }, h)),
          [0, 100, 200, 300, 400, 500].map((h) => /* @__PURE__ */ r("text", { x: 48 + h, y: "260", textAnchor: "middle", children: h }, h)),
          /* @__PURE__ */ r("text", { x: "48", y: "18", children: "Capacité · dossiers / mois" }),
          /* @__PURE__ */ r("text", { x: "550", y: "283", textAnchor: "end", children: "Prix mensuel · €" }),
          [[80, 40], [110, 65], [180, 60], [230, 115], [270, 80], [290, 150], [340, 120], [400, 165], [450, 180], [200, 140]].map(([h, f], u) => /* @__PURE__ */ l("g", { ...p((u === 9 ? "Votre offre" : "Offre " + (u + 1)) + " : " + h + " €/mois, capacité " + f + " dossiers/mois"), className: "bm-chart-point", children: [
            /* @__PURE__ */ r("circle", { cx: 48 + h, cy: 240 - f, r: u === 9 ? 8 : 5, fill: u === 9 ? "#5478e8" : u % 2 ? "#e99b53" : "#5cae98", stroke: "white", strokeWidth: "2" }),
            u === 9 && /* @__PURE__ */ r("text", { x: 48 + h, y: 220 - f, textAnchor: "middle", children: "Votre offre" })
          ] }, u))
        ] }),
        e === "Modèles" && /* @__PURE__ */ l("div", { className: "bm-detailed-models", children: [
          [us, Xr, Jr, _s].map((h, f) => /* @__PURE__ */ l("div", { className: "bm-detailed-model", ...p("Modèle " + String.fromCharCode(65 + f) + " : score fictif " + [8, 6, 9, 5][f] + " sur 10"), children: [
            /* @__PURE__ */ l("span", { children: [
              /* @__PURE__ */ r(h, { size: 18 }),
              /* @__PURE__ */ l("strong", { children: [
                "Modèle ",
                String.fromCharCode(65 + f)
              ] })
            ] }),
            /* @__PURE__ */ r("div", { className: "bm-detailed-rating", role: "meter", "aria-label": "Score du modèle " + String.fromCharCode(65 + f), "aria-valuemin": 0, "aria-valuemax": 10, "aria-valuenow": [8, 6, 9, 5][f], children: Array.from({ length: 10 }, (u, g) => /* @__PURE__ */ r("i", { style: { background: g < [8, 6, 9, 5][f] ? Xe[f] : void 0 } }, g)) }),
            /* @__PURE__ */ l("strong", { children: [
              [8, 6, 9, 5][f],
              /* @__PURE__ */ r("small", { children: "/10" })
            ] })
          ] }, f)),
          /* @__PURE__ */ r("p", { children: "Jeu de démonstration · aucune mesure de modèles commerciaux." })
        ] }),
        e === "Catégories" && /* @__PURE__ */ l("svg", { viewBox: "0 0 600 290", role: "group", "aria-label": "Demandes par outil", children: [
          /* @__PURE__ */ r("text", { x: "40", y: "18", children: "Demandes" }),
          [0, 25, 50, 75, 100].map((h) => /* @__PURE__ */ l("g", { children: [
            /* @__PURE__ */ r("line", { x1: "40", x2: "564", y1: 240 - h * 1.8, y2: 240 - h * 1.8, stroke: "#e8edf1", strokeDasharray: "3 5" }),
            /* @__PURE__ */ r("text", { x: "29", y: 244 - h * 1.8, textAnchor: "end", children: h })
          ] }, h)),
          [sr, xs, Xr, Jr].map((h, f) => {
            const u = [80, 55, 95, 40][f], g = 80 + f * 130;
            return /* @__PURE__ */ l("g", { ...p(["Recherche", "Web", "Assistant", "Calcul"][f] + " : " + u + " demandes"), className: "bm-chart-point", children: [
              /* @__PURE__ */ r("rect", { x: g, y: 240 - u * 1.8, width: "65", height: u * 1.8, rx: "5", fill: "#d4dce6" }),
              /* @__PURE__ */ r("rect", { x: g + 19, y: 204 - u * 1.8, width: "28", height: "28", rx: "8", fill: "#303846" }),
              /* @__PURE__ */ r(h, { x: g + 25, y: 210 - u * 1.8, width: "16", height: "16", color: "white" }),
              /* @__PURE__ */ r("text", { x: g + 32, y: "268", textAnchor: "middle", children: ["Recherche", "Web", "Assistant", "Calcul"][f] })
            ] }, f);
          })
        ] }),
        e === "Objectif" && /* @__PURE__ */ l(q, { children: [
          /* @__PURE__ */ l("svg", { viewBox: "0 0 600 265", role: "group", "aria-label": "Objectif hebdomadaire 80 dossiers", children: [
            [0, 20, 40, 60, 80, 100].map((h) => /* @__PURE__ */ l("g", { children: [
              /* @__PURE__ */ r("line", { x1: "45", x2: "558", y1: 220 - h * 1.8, y2: 220 - h * 1.8, stroke: "#e8edf1" }),
              /* @__PURE__ */ r("text", { x: "32", y: 224 - h * 1.8, textAnchor: "end", children: h })
            ] }, h)),
            /* @__PURE__ */ r("line", { x1: "45", x2: "558", y1: "76", y2: "76", stroke: "#c77872", strokeDasharray: "5 5" }),
            /* @__PURE__ */ r("text", { x: "551", y: "67", textAnchor: "end", children: "Objectif · 80 dossiers" }),
            /* @__PURE__ */ r("polyline", { points: [30, 45, 40, 63, 58, 77, 92].map((h, f) => 48 + f * 84 + "," + (220 - h * 1.8)).join(" "), fill: "none", stroke: "#687ea7", strokeWidth: "2.5" }),
            [30, 45, 40, 63, 58, 77, 92].map((h, f) => /* @__PURE__ */ l("g", { ...p("Semaine " + (f + 1) + " : " + h + " dossiers, écart " + (h - 80) + " à l’objectif de 80"), children: [
              /* @__PURE__ */ r("circle", { cx: 48 + f * 84, cy: 220 - h * 1.8, r: "5", fill: "white", stroke: "#687ea7", strokeWidth: "2" }),
              /* @__PURE__ */ l("text", { x: 48 + f * 84, y: "247", textAnchor: "middle", children: [
                "S",
                f + 1
              ] })
            ] }, f))
          ] }),
          /* @__PURE__ */ l("div", { className: "bm-detailed-country", children: [
            /* @__PURE__ */ r("p", { children: "Répartition géographique · autre série, échelle 0–100 dossiers" }),
            [["France", 92], ["Allemagne", 61], ["Espagne", 37]].map(([h, f]) => /* @__PURE__ */ l("div", { style: { background: "linear-gradient(to right,#edf2fa " + f + "%,transparent " + f + "%)" }, children: [
              /* @__PURE__ */ r("span", { children: h }),
              /* @__PURE__ */ l("strong", { children: [
                f,
                " dossiers"
              ] })
            ] }, h))
          ] })
        ] }),
        e === "Canaux" && /* @__PURE__ */ l("div", { className: "bm-detailed-channels", children: [
          [["Recherche", 26800], ["Réseaux", 16400], ["Partenaires", 12200]].map(([h, f], u) => /* @__PURE__ */ l("div", { ...p(h + " : " + Number(f).toLocaleString("fr-FR") + " € sur une échelle commune de 40 000 €"), children: [
            /* @__PURE__ */ l("div", { children: [
              /* @__PURE__ */ r("span", { children: h }),
              /* @__PURE__ */ l("strong", { children: [
                Number(f).toLocaleString("fr-FR"),
                " €"
              ] })
            ] }),
            /* @__PURE__ */ l("svg", { viewBox: "0 0 520 30", role: "img", "aria-label": h + " " + f + " euros", children: [
              /* @__PURE__ */ r("defs", { children: /* @__PURE__ */ l("pattern", { id: d + u, width: "6", height: "6", patternUnits: "userSpaceOnUse", patternTransform: "rotate(45)", children: [
                /* @__PURE__ */ r("rect", { width: "6", height: "6", fill: "#f6f7f9" }),
                /* @__PURE__ */ r("line", { y2: "6", stroke: "#dce1e9", strokeWidth: "2" })
              ] }) }),
              /* @__PURE__ */ r("rect", { width: "520", height: "24", y: "3", rx: "6", fill: "url(#" + d + u + ")" }),
              /* @__PURE__ */ r("rect", { width: Number(f) / 4e4 * 520, height: "24", y: "3", rx: "6", fill: ["#ec9b55", "#be72bb", "#629ceb"][u] }),
              /* @__PURE__ */ r("rect", { x: Number(f) / 4e4 * 520 - 3, width: "6", height: "30", rx: "3", fill: "white", stroke: "#aeb9c9" })
            ] })
          ] }, h)),
          /* @__PURE__ */ r("p", { children: "Échelle commune : 0 — 40 000 € · les repères indiquent la valeur." })
        ] }),
        e === "Livraisons" && /* @__PURE__ */ r("div", { className: "bm-detailed-deliveries", children: [["Emma", 98], ["Paul", 78], ["Alice", 68], ["Léa", 48]].map(([h, f], u) => /* @__PURE__ */ l("div", { ...p(h + " : " + f + " livraisons à l’heure sur 100"), children: [
          /* @__PURE__ */ l("div", { children: [
            /* @__PURE__ */ r("span", { className: "bm-detailed-avatar", style: { background: Xe[u] + "22", color: Xe[u] }, children: String(h)[0] }),
            /* @__PURE__ */ r("strong", { children: h }),
            /* @__PURE__ */ r("span", { children: "100 livraisons" }),
            /* @__PURE__ */ l("b", { children: [
              f,
              " %"
            ] })
          ] }),
          /* @__PURE__ */ l("div", { className: "bm-delivery-track", children: [
            /* @__PURE__ */ r("i", { style: { width: f + "%", background: Xe[u] } }),
            /* @__PURE__ */ r("span", { style: { left: f + "%", color: Xe[u] }, children: /* @__PURE__ */ r(Is, { size: 19 }) })
          ] })
        ] }, h)) })
      ] }),
      /* @__PURE__ */ r("footer", { className: "bm-chart-legend", children: e === "Pixels" ? "Noir : finalisés · gris : en cours · fond clair : grille jusqu’à 20." : e === "Miroir" ? "Bleu : entrées · bleu pâle : sorties · même échelle autour de zéro." : e === "Nuage" ? "Vert / orange : offres comparables fictives · bleu : votre offre." : "Valeurs et unités explicites · données de démonstration." })
    ] })
  ] });
}
const Nh = ["Lun", "Mar", "Mer", "Jeu", "Ven"];
function Gf({ empty: e = !1, locale: t = "fr" }) {
  return /* @__PURE__ */ r(Sh, { mode: "Profondeur", empty: e, locale: t });
}
function Sh({ mode: e, empty: t, locale: n = "fr" }) {
  const i = Z(null), [a, o] = H(540);
  ce(() => {
    const f = i.current;
    if (!f) return;
    const u = new ResizeObserver(([g]) => o(Math.max(240, g.contentRect.width)));
    return u.observe(f), () => u.disconnect();
  }, []);
  const [s, c] = H(null), [d, p] = H(65);
  if (e === "Donut" && !t) return /* @__PURE__ */ r(kh, { title: "Répartition des dossiers", caption: "Dossiers", rows: [{ label: "Services", value: 44 }, { label: "Industrie", value: 32 }, { label: "Technologie", value: 24 }] });
  if (Ch.includes(e)) return /* @__PURE__ */ r(Mh, { mode: e, empty: t });
  const h = { Profondeur: "Capacité de traitement", Jauges: "Objectifs de qualification", Donut: "Répartition des dossiers", Heatmap: "Activité par jour et heure" }[e];
  return /* @__PURE__ */ l("section", { className: "bm-chart-shell bm-extra", children: [
    /* @__PURE__ */ l("header", { className: "bm-chart-heading", children: [
      n === "en" && e === "Profondeur" ? "Processing capacity" : h,
      /* @__PURE__ */ r("span", { className: "bm-chart-date", children: n === "en" ? "Illustrative week" : "Données fictives · septembre 2026" })
    ] }),
    /* @__PURE__ */ r("div", { className: "bm-chart-body", ref: i, children: /* @__PURE__ */ l(zr, { enabled: e === "Profondeur" || e === "Heatmap", children: [
      e !== "Profondeur" && e !== "Heatmap" && /* @__PURE__ */ r("div", { className: "bm-extra-tip", role: "status", children: s || "Survolez ou parcourez les valeurs avec Tab." }),
      t ? /* @__PURE__ */ r("div", { className: "bm-chart-empty", children: /* @__PURE__ */ r("strong", { children: "Aucune donnée sur cette période" }) }) : /* @__PURE__ */ l(q, { children: [
        e === "Profondeur" && /* @__PURE__ */ l("svg", { viewBox: `0 0 ${a} 220`, role: "group", "aria-label": n === "en" ? "Processed records, capacity 12 records per day" : "Dossiers traités, capacité 12 dossiers par jour", children: [
          [0, 3, 6, 9, 12].map((f) => /* @__PURE__ */ l("g", { children: [
            /* @__PURE__ */ r("line", { x1: "28", x2: a - 8, y1: 184 - f * 12, y2: 184 - f * 12, stroke: "#e6e9ee", strokeDasharray: "3 6" }),
            /* @__PURE__ */ r("text", { x: "20", y: 188 - f * 12, textAnchor: "end", children: f })
          ] }, f)),
          [8, 5, 9, 7, 3, 6].map((f, u) => {
            const g = (a - 42) / 6, m = Math.min(34, g * 0.7), v = 34 + u * g, y = 184 - f * 12;
            return /* @__PURE__ */ l("g", { "data-chart-title": `${u + 7} ${n === "en" ? "September" : "septembre"} 2026`, "data-chart-value": `${f} ${n === "en" ? "records processed" : "dossiers traités"}`, "data-chart-detail": n === "en" ? `Capacity: 12 / day · ${Math.round(f / 12 * 100)}% used` : `Capacité : 12 / jour · ${Math.round(f / 12 * 100)} % utilisée`, "data-chart-color": "var(--bm-depth-front,#e99336)", tabIndex: 0, role: "img", "aria-label": n === "en" ? `${u + 7} September: ${f} records processed of 12` : `${u + 7} septembre : ${f} dossiers traités sur 12`, onFocus: () => c(`${u + 7} sept. · ${f} / 12 dossiers`), onBlur: () => c(null), onMouseEnter: () => c(`${u + 7} sept. · ${f} / 12 dossiers`), onMouseLeave: () => c(null), className: "bm-chart-point", children: [
              /* @__PURE__ */ r("path", { d: `M${v} 32 L${v + m / 2} 40 V184 L${v} 176Z`, fill: "var(--bm-depth-empty-front,#fff0e4)" }),
              /* @__PURE__ */ r("path", { d: `M${v + m / 2} 40 L${v + m} 32 V176 L${v + m / 2} 184Z`, fill: "var(--bm-depth-empty-side,#f8dfca)" }),
              /* @__PURE__ */ r("path", { d: `M${v} 32 L${v + m / 2} 24 L${v + m} 32 L${v + m / 2} 40Z`, fill: "var(--bm-depth-empty-top,#ffead9)" }),
              /* @__PURE__ */ r("path", { d: `M${v} ${y - 8} L${v + m / 2} ${y} V184 L${v} 176Z`, fill: "var(--bm-depth-front,#ff9a4d)" }),
              /* @__PURE__ */ r("path", { d: `M${v + m / 2} ${y} L${v + m} ${y - 8} V176 L${v + m / 2} 184Z`, fill: "var(--bm-depth-side,#e97b30)" }),
              /* @__PURE__ */ r("path", { d: `M${v} ${y - 8} L${v + m / 2} ${y - 16} L${v + m} ${y - 8} L${v + m / 2} ${y}Z`, fill: "var(--bm-depth-top,#ffb879)" }),
              /* @__PURE__ */ r("path", { d: `M${v + m / 2} ${y} V184`, stroke: "var(--bm-depth-top,#ffca9d)", strokeWidth: ".7" }),
              /* @__PURE__ */ r("rect", { className: "bm-chart-focus", x: v - 3, y: "19", width: "50", height: "170", rx: "4" }),
              /* @__PURE__ */ l("text", { x: v + m / 2, y: "207", textAnchor: "middle", children: [
                u + 7,
                " Sep"
              ] })
            ] }, u);
          }),
          /* @__PURE__ */ r("text", { x: "28", y: "17", children: n === "en" ? "Records / day" : "Dossiers / jour" })
        ] }),
        e === "Jauges" && /* @__PURE__ */ l("div", { className: "bm-gauges", children: [
          [["Dossiers qualifiés", d, "#5574f5"], ["Pièces reçues", 85, "#9954df"], ["Signatures obtenues", 30, "#dd6783"]].map(([f, u, g]) => /* @__PURE__ */ l("div", { className: "bm-gauge", children: [
            /* @__PURE__ */ l("div", { children: [
              /* @__PURE__ */ r("span", { children: f }),
              /* @__PURE__ */ l("strong", { children: [
                u,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ r("div", { className: "bm-gauge-track", role: "meter", "aria-label": String(f), "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": Number(u), children: Array.from({ length: 20 }, (m, v) => /* @__PURE__ */ r("i", { style: { background: v < Number(u) / 5 ? String(g) : void 0 } }, v)) })
          ] }, f)),
          /* @__PURE__ */ l("label", { className: "bm-gauge-range", children: [
            "Qualification · pas de 5 %",
            /* @__PURE__ */ r("input", { "aria-label": "Taux de qualification", type: "range", min: 0, max: 100, step: 5, value: d, onChange: (f) => p(Number(f.target.value)) })
          ] })
        ] }),
        e === "Donut" && /* @__PURE__ */ l("div", { className: "bm-donut-layout", children: [
          /* @__PURE__ */ l("svg", { viewBox: "0 0 240 240", role: "group", "aria-label": "Répartition de 100 dossiers par secteur", children: [
            Array.from({ length: 50 }, (f, u) => {
              const g = (u * 7.2 - 90) * Math.PI / 180, m = u < 22 ? "#277fea" : u < 38 ? "#e99336" : "#9664cc";
              return /* @__PURE__ */ r("line", { x1: 120 + 70 * Math.cos(g), y1: 120 + 70 * Math.sin(g), x2: 120 + 91 * Math.cos(g), y2: 120 + 91 * Math.sin(g), stroke: m, strokeWidth: "6", strokeLinecap: "round" }, u);
            }),
            /* @__PURE__ */ r("text", { x: "120", y: "119", textAnchor: "middle", className: "bm-donut-total", children: "100" }),
            /* @__PURE__ */ r("text", { x: "120", y: "140", textAnchor: "middle", children: "dossiers" })
          ] }),
          /* @__PURE__ */ r("div", { className: "bm-donut-legend", children: [["Services", 44, "#277fea"], ["Industrie", 32, "#e99336"], ["Technologie", 24, "#9664cc"]].map(([f, u, g]) => /* @__PURE__ */ l("button", { type: "button", onFocus: () => c(`${f} · ${u} dossiers · ${u} %`), onBlur: () => c(null), onMouseEnter: () => c(`${f} · ${u} dossiers · ${u} %`), onMouseLeave: () => c(null), children: [
            /* @__PURE__ */ r("i", { style: { background: String(g) } }),
            /* @__PURE__ */ r("span", { children: f }),
            /* @__PURE__ */ l("strong", { children: [
              u,
              "%"
            ] })
          ] }, f)) })
        ] }),
        e === "Heatmap" && /* @__PURE__ */ l("div", { className: "bm-heatmap", children: [
          /* @__PURE__ */ l("div", { className: "bm-heat-grid", children: [
            /* @__PURE__ */ r("span", {}),
            Array.from({ length: 8 }, (f, u) => /* @__PURE__ */ l("span", { children: [
              u + 9,
              " h"
            ] }, u)),
            Nh.map((f, u) => /* @__PURE__ */ l("div", { className: "bm-heat-row", children: [
              /* @__PURE__ */ r("span", { children: f }),
              Array.from({ length: 8 }, (g, m) => {
                const v = (u * 3 + m * 2 + Math.floor(m / 3)) % 9, y = `${f} ${7 + u} septembre, ${m + 9} h : ${v} actions`;
                return /* @__PURE__ */ r("button", { "data-chart-title": `${f} ${7 + u} septembre · ${m + 9} h`, "data-chart-value": `${v} action${v === 1 ? "" : "s"}`, "data-chart-detail": "Activité sur ce créneau d’une heure", type: "button", "aria-label": y, style: { background: ["#f0f4f9", "#dfebf8", "#c9dff6", "#b0d1f3", "#94bfed", "#71a8e4", "#528fd4", "#3575ba", "#1e5b9c"][v] }, onFocus: () => c(y), onBlur: () => c(null), onMouseEnter: () => c(y), onMouseLeave: () => c(null) }, m);
              })
            ] }, f))
          ] }),
          /* @__PURE__ */ l("div", { className: "bm-heat-key", children: [
            /* @__PURE__ */ r("span", { children: "0 action" }),
            ["#f0f4f9", "#c9dff6", "#94bfed", "#528fd4", "#1e5b9c"].map((f) => /* @__PURE__ */ r("i", { style: { background: f } }, f)),
            /* @__PURE__ */ r("span", { children: "8 actions" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ r("footer", { className: "bm-chart-legend", children: e === "Profondeur" ? n === "en" ? "Processed / capacity · 12 per day · illustrative week" : "Orange : traité · enveloppe pâle : capacité de 12 / jour · base à zéro." : e === "Jauges" ? "20 segments · chaque segment représente 5 %." : e === "Donut" ? "50 segments · chaque segment représente 2 dossiers (2 %)." : "Actions enregistrées par créneau d’une heure · du 7 au 11 septembre." })
    ] }) })
  ] });
}
function Uf({
  title: e,
  columns: t,
  rows: n,
  searchLabel: i = "Rechercher…",
  groupLabel: a = "Grouper",
  empty: o = "Aucun résultat.",
  pageSize: s = 8,
  onOpen: c,
  openOnClick: d = !1,
  action: p,
  footerLabel: h,
  locale: f = "fr"
}) {
  const u = f === "en", g = Math.max(1, s), m = Z(null), [v, y] = H(""), [w, x] = H(!1), [k, M] = H(0), [P, S] = H(/* @__PURE__ */ new Set()), [D, E] = H(/* @__PURE__ */ new Set()), [T, R] = H({}), [O, L] = H({ column: -1, direction: null }), N = ts(
    () => eh(n, v, T, O, 1),
    [n, v, T, O]
  ), _ = Math.max(1, Math.ceil(N.length / g)), j = Math.min(k, _ - 1), G = w ? N : N.slice(
    j * g,
    j * g + g
  ), C = w ? [...new Set(G.map((A) => A.group || "Autres"))].map((A) => ({
    name: A,
    rows: G.filter(($) => ($.group || "Autres") === A)
  })) : [{ name: "", rows: G }], I = (A) => S(($) => {
    const V = new Set($);
    return V.has(A) ? V.delete(A) : V.add(A), V;
  }), z = () => {
    var A;
    y(""), R({}), L({ column: -1, direction: null }), x(!1), M(0), S(/* @__PURE__ */ new Set()), E(/* @__PURE__ */ new Set()), (A = m.current) == null || A.focus();
  };
  return /* @__PURE__ */ l("section", { className: "advanced-table-demo", "aria-label": e, children: [
    /* @__PURE__ */ l("header", { className: "advanced-table-title", children: [
      /* @__PURE__ */ l("span", { children: [
        /* @__PURE__ */ r(ji, { size: 15, "aria-hidden": "true" }),
        e,
        /* @__PURE__ */ r("small", { children: N.length })
      ] }),
      /* @__PURE__ */ l("div", { className: "advanced-table-title-actions", children: [
        p,
        /* @__PURE__ */ l(U, { small: !0, variant: "ghost", onClick: z, children: [
          /* @__PURE__ */ r(Rt, { size: 12, "aria-hidden": "true" }),
          u ? "Reset" : "Réinitialiser"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ l("div", { className: "advanced-table-toolbar", children: [
      /* @__PURE__ */ l("label", { className: "advanced-table-search", children: [
        /* @__PURE__ */ r(sr, { size: 14, "aria-hidden": "true" }),
        /* @__PURE__ */ r(
          "input",
          {
            ref: m,
            value: v,
            onChange: (A) => {
              y(A.target.value), M(0);
            },
            "aria-label": i,
            placeholder: i
          }
        )
      ] }),
      n.some((A) => A.group) && /* @__PURE__ */ l("label", { className: "advanced-table-group", children: [
        a,
        /* @__PURE__ */ l(
          $r,
          {
            "aria-label": a,
            value: w ? "group" : "none",
            onValueChange: (A) => {
              x(A === "group"), M(0);
            },
            children: [
              /* @__PURE__ */ r("option", { value: "none", children: u ? "None" : "Aucun" }),
              /* @__PURE__ */ r("option", { value: "group", children: u ? "By group" : "Par groupe" })
            ]
          }
        )
      ] })
    ] }),
    P.size > 0 && /* @__PURE__ */ r("div", { className: "advanced-table-selection", "aria-live": "polite", children: P.size ? /* @__PURE__ */ l(q, { children: [
      /* @__PURE__ */ l("strong", { children: [
        P.size,
        " ",
        u ? "selected" : "sélectionné(s)"
      ] }),
      /* @__PURE__ */ r(
        U,
        {
          small: !0,
          variant: "ghost",
          onClick: () => S(/* @__PURE__ */ new Set()),
          children: u ? "Clear selection" : "Désélectionner"
        }
      )
    ] }) : /* @__PURE__ */ r("span", { children: "Sélectionnez des lignes pour agir en une fois." }) }),
    /* @__PURE__ */ r("div", { className: "advanced-table-overflow", children: /* @__PURE__ */ l(
      _r,
      {
        locale: f,
        filters: T,
        onFiltersChange: (A) => {
          R(A), M(0);
        },
        sort: O,
        onSortChange: (A) => {
          L(A), M(0);
        },
        children: [
          /* @__PURE__ */ r("thead", { children: /* @__PURE__ */ l(ct, { children: [
            /* @__PURE__ */ r("th", { className: "selection-cell", children: /* @__PURE__ */ r(
              "input",
              {
                type: "checkbox",
                "aria-label": u ? "Select all visible rows" : "Sélectionner toutes les lignes visibles",
                disabled: !G.length,
                checked: G.length > 0 && G.every((A) => P.has(A.id)),
                ref: (A) => {
                  A && (A.indeterminate = G.some(($) => P.has($.id)) && !G.every(($) => P.has($.id)));
                },
                onChange: (A) => S(
                  A.target.checked ? new Set(G.map(($) => $.id)) : /* @__PURE__ */ new Set()
                )
              }
            ) }),
            t.map((A) => /* @__PURE__ */ r("th", { children: A }, A))
          ] }) }),
          /* @__PURE__ */ l("tbody", { children: [
            C.map((A) => /* @__PURE__ */ l(nn, { children: [
              w && /* @__PURE__ */ r(ct, { className: "advanced-table-group-row", children: /* @__PURE__ */ r("td", { colSpan: t.length + 1, children: /* @__PURE__ */ l(
                "button",
                {
                  "aria-expanded": !D.has(A.name),
                  onClick: () => E(($) => {
                    const V = new Set($);
                    return V.has(A.name) ? V.delete(A.name) : V.add(A.name), V;
                  }),
                  children: [
                    /* @__PURE__ */ r(
                      Ue,
                      {
                        size: 13,
                        "aria-hidden": "true",
                        style: {
                          transform: D.has(A.name) ? "rotate(-90deg)" : void 0
                        }
                      }
                    ),
                    /* @__PURE__ */ r("span", { children: A.name }),
                    /* @__PURE__ */ r("small", { children: A.rows.length })
                  ]
                }
              ) }) }),
              !D.has(A.name) && A.rows.map(($) => /* @__PURE__ */ l(
                ct,
                {
                  className: c ? "advanced-table-openable" : void 0,
                  "data-selected": P.has($.id),
                  tabIndex: c ? 0 : void 0,
                  onClick: (V) => {
                    d && c && !V.target.closest(
                      "button,a,input,select,textarea,[role=menuitem],[role=button]"
                    ) && c($.id);
                  },
                  onDoubleClick: () => {
                    d || c == null || c($.id);
                  },
                  onKeyDown: (V) => {
                    c && (V.key === "Enter" || V.key === " ") && (V.preventDefault(), c($.id));
                  },
                  children: [
                    /* @__PURE__ */ r("td", { className: "selection-cell", children: /* @__PURE__ */ r(
                      "input",
                      {
                        type: "checkbox",
                        checked: P.has($.id),
                        "aria-label": `${u ? "Select" : "Sélectionner"} ${$.searchText}`,
                        onChange: () => I($.id)
                      }
                    ) }),
                    $.cells.map((V, B) => /* @__PURE__ */ r("td", { children: V }, B))
                  ]
                },
                $.id
              ))
            ] }, A.name || "all")),
            !N.length && /* @__PURE__ */ r(ct, { children: /* @__PURE__ */ r(
              "td",
              {
                colSpan: t.length + 1,
                className: "advanced-table-empty",
                children: o
              }
            ) })
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ l("footer", { className: "advanced-table-pagination", children: [
      /* @__PURE__ */ r("span", { children: h ?? /* @__PURE__ */ l(q, { children: [
        N.length,
        " ",
        u ? N.length === 1 ? "record" : "records" : N.length === 1 ? "dossier" : "dossiers",
        _ > 1 && !w ? ` · ${j + 1} / ${_}` : ""
      ] }) }),
      !w && _ > 1 && /* @__PURE__ */ l("div", { children: [
        /* @__PURE__ */ r(
          "button",
          {
            "aria-label": u ? "Previous page" : "Page précédente",
            disabled: j === 0,
            onClick: () => M(j - 1),
            children: /* @__PURE__ */ r(Wi, { size: 15 })
          }
        ),
        /* @__PURE__ */ r(
          "button",
          {
            "aria-label": u ? "Next page" : "Page suivante",
            disabled: j >= _ - 1,
            onClick: () => M(j + 1),
            children: /* @__PURE__ */ r(be, { size: 15 })
          }
        )
      ] })
    ] })
  ] });
}
function Kf({ title: e, subtitle: t, initials: n, action: i }) {
  return /* @__PURE__ */ l("span", { className: "advanced-company", children: [
    n && /* @__PURE__ */ r("i", { "aria-hidden": "true", children: n }),
    /* @__PURE__ */ l("span", { children: [
      /* @__PURE__ */ r("strong", { children: e }),
      t && /* @__PURE__ */ r("small", { children: t })
    ] }),
    i
  ] });
}
function qf({ value: e, label: t = `${e}%`, detail: n, ariaLabel: i, colorByRate: a = !1 }) {
  const o = Math.min(100, Math.max(0, e));
  return /* @__PURE__ */ l("span", { className: "advanced-probability", "data-rate-tone": a ? o < 40 ? "low" : o < 70 ? "medium" : "high" : void 0, children: [
    /* @__PURE__ */ r("span", { className: "advanced-probability-track", role: "progressbar", "aria-label": i ?? (typeof n == "string" ? n : "Progression"), "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": Math.round(o), children: /* @__PURE__ */ r("i", { style: { width: `${o}%` } }) }),
    /* @__PURE__ */ l("span", { children: [
      t,
      n && /* @__PURE__ */ r("small", { className: "advanced-stage", children: n })
    ] })
  ] });
}
function Yf({ values: e, label: t, color: n = "var(--bm-action)", value: i, unit: a = "", onInspect: o, onActiveChange: s }) {
  if (!e.length) return /* @__PURE__ */ r("span", { children: "—" });
  const c = Math.min(...e), d = Math.max(...e), p = Math.max(1, d - c), h = e.map((g, m) => `${3 + (e.length === 1 ? 0 : m * 114 / (e.length - 1))},${27 - (g - c) / p * 22}`).join(" "), f = e.at(-1), u = /* @__PURE__ */ l("svg", { viewBox: "0 0 120 32", "aria-hidden": "true", children: [
    /* @__PURE__ */ r("line", { x1: "2", y1: "28", x2: "118", y2: "28" }),
    /* @__PURE__ */ r("polyline", { points: h, style: { stroke: n } }),
    /* @__PURE__ */ r("circle", { cx: e.length === 1 ? 3 : 117, cy: 27 - (f - c) / p * 22, r: "2.3", style: { fill: n } })
  ] });
  return /* @__PURE__ */ l("span", { className: "bm-table-spark", children: [
    o ? /* @__PURE__ */ r("button", { type: "button", "aria-label": `${t}: ${e.join(", ")}${a}`, onClick: o, onFocus: () => s == null ? void 0 : s(!0), onBlur: () => s == null ? void 0 : s(!1), onMouseEnter: () => s == null ? void 0 : s(!0), onMouseLeave: () => s == null ? void 0 : s(!1), children: u }) : /* @__PURE__ */ r("span", { role: "img", "aria-label": `${t}: ${e.join(", ")}${a}`, children: u }),
    i !== void 0 && /* @__PURE__ */ r("strong", { children: i })
  ] });
}
function Xf({ name: e, children: t, photoUrl: n, photoPosition: i = "50%", photoSize: a = "cover" }) {
  return /* @__PURE__ */ l("span", { className: "bm-person-cell", children: [
    /* @__PURE__ */ r("span", { className: "bm-person-photo", role: "img", "aria-label": e, style: n ? { backgroundImage: `url(${n})`, backgroundPosition: i, backgroundSize: a } : void 0 }),
    /* @__PURE__ */ r("span", { children: t ?? e })
  ] });
}
function Zf({ title: e, meta: t, tone: n = "neutral" }) {
  return /* @__PURE__ */ l("span", { className: "bm-next-action-cell", "data-tone": n, children: [
    /* @__PURE__ */ l("span", { children: [
      /* @__PURE__ */ r("strong", { children: e }),
      /* @__PURE__ */ r("small", { children: t })
    ] }),
    /* @__PURE__ */ r(be, { size: 16, "aria-hidden": "true" })
  ] });
}
function Jf({ label: e = "Upload", accept: t = ".pdf,.doc,.docx,.xls,.xlsx,.csv", onSelect: n, buttonProps: i }) {
  const a = Z(null);
  function o(s) {
    var d;
    const c = (d = s.target.files) == null ? void 0 : d[0];
    c && n(c), s.target.value = "";
  }
  return /* @__PURE__ */ l(q, { children: [
    /* @__PURE__ */ r("input", { ref: a, type: "file", hidden: !0, accept: t, onChange: o }),
    /* @__PURE__ */ l(U, { small: !0, ...i, onClick: (s) => {
      var c;
      s.stopPropagation(), (c = a.current) == null || c.click();
    }, children: [
      /* @__PURE__ */ r(Ts, { size: 13 }),
      e
    ] })
  ] });
}
const Ii = {
  idle: "Prêt à transférer",
  uploading: "Transfert en cours",
  paused: "Transfert en pause",
  complete: "Transfert terminé",
  error: "Transfert interrompu. Vous pouvez reprendre.",
  cancelled: "Transfert annulé"
};
function Ti(e) {
  const t = Math.max(0, e);
  if (t < 1e3) return `${Math.round(t)} o`;
  const n = t < 1e6 ? "ko" : "Mo";
  return `${(t / (n === "ko" ? 1e3 : 1e6)).toLocaleString("fr-FR", { maximumFractionDigits: 1 })} ${n}`;
}
function Qf({
  name: e,
  progress: t,
  state: n,
  bytes: i,
  onStart: a,
  onPause: o,
  onResume: s,
  onCancel: c,
  onDownload: d,
  fileType: p = "CSV"
}) {
  const h = pt(), f = Z(null), u = Z(null), g = Z(null);
  tn(() => {
    var R;
    const S = u.current;
    if (!S) return;
    const D = document.activeElement;
    if (D !== S && D !== document.body) return;
    const E = S.dataset.uploadCommand;
    !E || (n === "uploading" || n === "paused" ? ["toggle", "cancel"] : n === "complete" ? ["remove", "start", "download"] : n === "error" ? ["cancel", "resume"] : ["start"]).includes(E) && S.isConnected && !S.closest("[inert]") || (R = g.current) == null || R.focus({ preventScroll: !0 });
  }, [n]);
  const m = n === "complete", v = n === "error", y = n === "paused", w = n === "uploading" || y, x = m ? 100 : Math.round(
    Math.min(100, Math.max(0, Number.isFinite(t) ? t : 0))
  ), k = Math.round(Math.max(0, i) * x / 100), M = h ? 0 : 0.24, P = m ? /* @__PURE__ */ l(q, { children: [
    /* @__PURE__ */ r(te, { size: 13, "aria-hidden": "true" }),
    "Terminé"
  ] }) : v ? /* @__PURE__ */ l(q, { children: [
    /* @__PURE__ */ r(Ze, { size: 13, "aria-hidden": "true" }),
    "Transfert interrompu"
  ] }) : y ? `En pause ${x} %` : n === "uploading" ? `Transfert ${x} %` : Ii[n];
  return /* @__PURE__ */ l(
    re.div,
    {
      ref: f,
      onFocusCapture: (S) => {
        S.target instanceof HTMLButtonElement && (u.current = S.target);
      },
      onBlurCapture: (S) => {
        var D;
        (!(S.relatedTarget instanceof Node) || !((D = f.current) != null && D.contains(S.relatedTarget))) && (u.current = null);
      },
      layout: !h,
      className: `upload-shell state-${n}`,
      transition: { layout: { duration: 0.32, ease: [0.22, 1, 0.36, 1] } },
      children: [
        /* @__PURE__ */ r("span", { className: "sr-only", role: "status", "aria-atomic": "true", children: Ii[n] }),
        /* @__PURE__ */ l("div", { className: "upload-face", children: [
          /* @__PURE__ */ r(lt, { initial: !1, children: w && /* @__PURE__ */ r(
            re.div,
            {
              className: "upload-wash",
              "aria-hidden": "true",
              initial: { opacity: 0 },
              animate: { width: `${x}%`, opacity: 1 },
              exit: { opacity: 0 },
              transition: {
                width: { duration: h ? 0 : 0.12, ease: "linear" },
                opacity: { duration: M }
              }
            },
            "wash"
          ) }),
          /* @__PURE__ */ l("div", { className: "upload-info", children: [
            /* @__PURE__ */ l("div", { className: "file-symbol", "aria-hidden": "true", children: [
              /* @__PURE__ */ r(gs, { size: 23, strokeWidth: 1.6 }),
              /* @__PURE__ */ r("span", { children: p.slice(0, 5).toUpperCase() })
            ] }),
            /* @__PURE__ */ l("div", { className: "file-text", children: [
              /* @__PURE__ */ r("strong", { title: e, children: e }),
              /* @__PURE__ */ l("div", { className: "file-subline", children: [
                /* @__PURE__ */ r(lt, { mode: "wait", initial: !1, children: /* @__PURE__ */ r(
                  re.span,
                  {
                    className: "upload-status",
                    initial: { opacity: 0, y: h ? 0 : 3 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: h ? 0 : -3 },
                    transition: { duration: h ? 0 : 0.16 },
                    children: P
                  },
                  n
                ) }),
                /* @__PURE__ */ l("span", { className: "file-size", children: [
                  "· ",
                  w || v ? `${Ti(k)} sur ` : "",
                  Ti(i)
                ] })
              ] })
            ] }),
            /* @__PURE__ */ l("div", { className: "upload-tools", children: [
              w && /* @__PURE__ */ l(q, { children: [
                /* @__PURE__ */ r(
                  "button",
                  {
                    ref: g,
                    "data-upload-command": "toggle",
                    type: "button",
                    "aria-label": y ? "Reprendre le transfert" : "Mettre en pause",
                    onClick: y ? s : o,
                    children: y ? /* @__PURE__ */ r(Qr, { size: 12, fill: "currentColor", "aria-hidden": "true" }) : /* @__PURE__ */ r(qi, { size: 12, fill: "currentColor", "aria-hidden": "true" })
                  }
                ),
                /* @__PURE__ */ r(
                  "button",
                  {
                    "data-upload-command": "cancel",
                    type: "button",
                    className: "plain-tool",
                    "aria-label": "Annuler le transfert",
                    onClick: c,
                    children: /* @__PURE__ */ r(mt, { size: 13, "aria-hidden": "true" })
                  }
                )
              ] }),
              m && /* @__PURE__ */ r(
                "button",
                {
                  "data-upload-command": "remove",
                  type: "button",
                  className: "remove-file",
                  "aria-label": "Retirer le fichier",
                  onClick: c,
                  children: /* @__PURE__ */ r(Ds, { size: 13, "aria-hidden": "true" })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ r(lt, { initial: !1, children: w && /* @__PURE__ */ r(
            re.div,
            {
              className: "upload-track",
              role: "progressbar",
              "aria-label": `Transfert de ${e}`,
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": x,
              "aria-valuetext": `${x} %${y ? ", en pause" : ""}`,
              initial: { height: 5, opacity: 1 },
              exit: { height: 0, opacity: 0, marginTop: 0 },
              transition: { duration: M },
              children: /* @__PURE__ */ r(
                re.div,
                {
                  animate: { width: `${x}%` },
                  transition: {
                    duration: h ? 0 : 0.12,
                    ease: "linear"
                  }
                }
              )
            },
            "progress"
          ) }),
          v && /* @__PURE__ */ l("p", { className: "upload-error", children: [
            "Le transfert a été interrompu. Reprenez à ",
            x,
            " %."
          ] })
        ] }),
        /* @__PURE__ */ r(
          re.div,
          {
            className: "upload-actions",
            initial: !1,
            inert: w,
            "aria-hidden": w,
            animate: { height: w ? 0 : "auto", opacity: w ? 0 : 1 },
            transition: { duration: M, ease: [0.22, 1, 0.36, 1] },
            children: /* @__PURE__ */ r("div", { children: w ? null : m ? /* @__PURE__ */ l(q, { children: [
              /* @__PURE__ */ r(
                U,
                {
                  ref: g,
                  "data-upload-command": "start",
                  onClick: a,
                  children: "Recommencer"
                }
              ),
              /* @__PURE__ */ l(
                U,
                {
                  "data-upload-command": "download",
                  variant: "primary",
                  onClick: d,
                  children: [
                    /* @__PURE__ */ r(Kt, { size: 14, "aria-hidden": "true" }),
                    "Télécharger"
                  ]
                }
              )
            ] }) : v ? /* @__PURE__ */ l(q, { children: [
              /* @__PURE__ */ r(U, { "data-upload-command": "cancel", onClick: c, children: "Annuler" }),
              /* @__PURE__ */ l(
                U,
                {
                  ref: g,
                  "data-upload-command": "resume",
                  variant: "primary",
                  onClick: s,
                  children: [
                    /* @__PURE__ */ r(Rt, { size: 13, "aria-hidden": "true" }),
                    "Reprendre"
                  ]
                }
              )
            ] }) : /* @__PURE__ */ l(
              U,
              {
                ref: g,
                "data-upload-command": "start",
                variant: "primary",
                onClick: a,
                children: [
                  /* @__PURE__ */ r(Qr, { size: 13, "aria-hidden": "true" }),
                  n === "cancelled" ? "Recommencer" : "Lancer le transfert"
                ]
              }
            ) })
          }
        )
      ]
    }
  );
}
const qo = { state: "idle", progress: 0 };
function Ph(e, t) {
  switch (t.type) {
    case "start":
      return { state: "uploading", progress: 0 };
    case "reset":
      return qo;
    case "pause":
      return e.state === "uploading" ? { ...e, state: "paused" } : e;
    case "resume":
      return e.state === "paused" || e.state === "error" ? { ...e, state: "uploading" } : e;
    case "cancel":
      return { state: "cancelled", progress: 0 };
    case "fail":
      return e.state === "uploading" ? { ...e, state: "error" } : e;
    case "tick": {
      if (e.state !== "uploading" || !Number.isFinite(t.amount) || t.amount <= 0) return e;
      const n = Math.min(100, e.progress + t.amount);
      return { state: n === 100 ? "complete" : "uploading", progress: n };
    }
  }
}
function ep({ durationMs: e = 12e3 } = {}) {
  const [t, n] = ns(Ph, qo), i = Number.isFinite(e) && e > 0 ? e : 12e3;
  return ce(() => {
    if (t.state !== "uploading") return;
    let a = performance.now();
    const o = window.setInterval(() => {
      const s = performance.now();
      n({ type: "tick", amount: (s - a) / i * 100 }), a = s;
    }, 120);
    return () => window.clearInterval(o);
  }, [t.state, i]), { state: t.state, progress: Math.floor(t.progress), onStart: rt(() => n({ type: "start" }), []), onPause: rt(() => n({ type: "pause" }), []), onResume: rt(() => n({ type: "resume" }), []), onCancel: rt(() => n({ type: "cancel" }), []), onError: rt(() => n({ type: "fail" }), []), reset: rt(() => n({ type: "reset" }), []) };
}
function Eh(e, t, n, i) {
  const a = Math.max(1, Math.min(i, t));
  return { start: Math.max(0, Math.min(i - a, Math.round(e + n))), duration: a };
}
function Rh(e, t, n, i) {
  return { start: e, duration: Math.max(1, Math.min(i - e, Math.round(t + n))) };
}
function Ah(e, t, n, i) {
  const a = Math.min(i, e + t), o = Math.max(0, Math.min(a - 1, Math.round(e + n)));
  return { start: o, duration: a - o };
}
const Ee = 864e5, Oi = (e) => new Date(e).toISOString().slice(0, 10), $h = (e) => e.map((t) => `${t.id}:${t.start}:${t.end}`).join("|");
function tp({ tasks: e, onSelect: t, onChange: n, locale: i = "fr", title: a = "Plan de mission", showHelp: o = !0 }) {
  const [s, c] = H(e), [d, p] = H(null), [h, f] = H(null), [u, g] = H(""), m = Z(null), v = Z(!1), y = $h(e);
  ce(() => c(e), [y]);
  const w = s.map((C) => Date.parse(C.start)), x = s.map((C) => Date.parse(C.end)), k = (w.length ? Math.min(...w) : Date.now()) - Ee * 2, M = (x.length ? Math.max(...x, k + Ee) : k + Ee) + Ee * 2, P = Math.max(1, Math.round((M - k) / Ee)), S = (C) => Math.round((Date.parse(C) - k) / Ee), D = (C) => ({ start: S(C.start), duration: Math.max(1, Math.round((Date.parse(C.end) - Date.parse(C.start)) / Ee)) }), E = (C) => new Date(C).toLocaleDateString("en-GB", { day: "numeric", month: "short", timeZone: "UTC" }), T = s.find((C) => C.id === d), R = (C) => ({ start: Oi(k + C.start * Ee), end: Oi(k + (C.start + C.duration) * Ee) }), O = (C, I, z) => C.map((A) => A.id === I ? { ...A, ...R(z) } : A), L = (C, I, z) => z === "start" ? Ah(C.start, C.duration, I, P) : z === "end" ? Rh(C.start, C.duration, I, P) : Eh(C.start, C.duration, I, P);
  function N(C, I, z = "move") {
    if (C.button !== 0) return;
    C.preventDefault(), C.currentTarget.focus(), p(I.id);
    const A = C.currentTarget.closest(".bm-plan-track").getBoundingClientRect().width, $ = D(I);
    m.current = { id: I.id, title: I.title, x: C.clientX, span: $, latest: $, unit: A / P, edge: z, moved: !1 }, f(I.id), C.currentTarget.setPointerCapture(C.pointerId);
  }
  function _(C) {
    const I = m.current;
    if (!I) return;
    const z = Math.round((C.clientX - I.x) / I.unit);
    z !== 0 && (I.moved = !0, I.latest = L(I.span, z, I.edge), c((A) => O(A, I.id, I.latest)));
  }
  function j(C = !1) {
    const I = m.current;
    if (I) {
      if (C) c((z) => O(z, I.id, I.span));
      else if (I.moved) {
        const z = R(I.latest), A = (n == null ? void 0 : n(I.id, z)) !== !1;
        A || c(($) => O($, I.id, I.span)), g(A ? `${I.title} déplacé du ${E(Date.parse(z.start))} au ${E(Date.parse(z.end))}.` : `${I.title} n’a pas été déplacé : vérifiez ses dépendances.`), v.current = !0, requestAnimationFrame(() => {
          v.current = !1;
        });
      }
      m.current = null, f(null);
    }
  }
  function G(C, I, z = "move") {
    if (!["ArrowLeft", "ArrowRight"].includes(C.key)) return;
    C.preventDefault(), p(I.id);
    const A = L(D(I), C.key === "ArrowRight" ? 1 : -1, z), $ = R(A);
    c((B) => B.map((F) => F.id === I.id ? { ...F, ...$ } : F));
    const V = (n == null ? void 0 : n(I.id, $)) !== !1;
    V || c((B) => B.map((F) => F.id === I.id ? I : F)), g(V ? `${I.title} déplacé du ${E(Date.parse($.start))} au ${E(Date.parse($.end))}.` : `${I.title} n’a pas été déplacé : vérifiez ses dépendances.`);
  }
  return /* @__PURE__ */ l("div", { className: "bm-planning", children: [
    /* @__PURE__ */ l("header", { children: [
      /* @__PURE__ */ l("span", { children: [
        /* @__PURE__ */ r(je, { size: 15 }),
        a
      ] }),
      /* @__PURE__ */ r("div", { className: "bm-planning-tabs", children: /* @__PURE__ */ r("button", { type: "button", "aria-pressed": "true", children: "Gantt" }) }),
      /* @__PURE__ */ r("button", { className: "bm-plan-icon", type: "button", "aria-label": "Réinitialiser la sélection", onClick: () => p(null), children: /* @__PURE__ */ r(Rt, { size: 13 }) })
    ] }),
    /* @__PURE__ */ l("div", { className: "bm-plan-tools", children: [
      /* @__PURE__ */ r("span", { children: i === "en" ? "Drag a bar to move its dates" : "Glissez une barre pour déplacer les dates" }),
      /* @__PURE__ */ l("span", { children: [
        E(k),
        " — ",
        E(M)
      ] })
    ] }),
    /* @__PURE__ */ r("span", { className: "bm-plan-announcement", role: "status", children: u }),
    /* @__PURE__ */ r("div", { className: "bm-plan-scroll", children: /* @__PURE__ */ l("div", { className: "bm-plan-grid", children: [
      /* @__PURE__ */ l("div", { className: "bm-plan-scale", children: [
        /* @__PURE__ */ r("span", { children: i === "en" ? "Deliverable" : "Livrable" }),
        /* @__PURE__ */ r("div", { children: Array.from({ length: 10 }, (C, I) => /* @__PURE__ */ r("span", { children: E(k + (M - k) * I / 9) }, I)) })
      ] }),
      s.map((C, I) => {
        const z = D(C);
        return /* @__PURE__ */ l("div", { className: `bm-plan-row ${d === C.id ? "selected" : ""}`, children: [
          /* @__PURE__ */ l("div", { className: "bm-plan-rowlabel", children: [
            /* @__PURE__ */ r("span", { children: C.title }),
            /* @__PURE__ */ r("small", { children: C.owner })
          ] }),
          /* @__PURE__ */ r("div", { className: "bm-plan-track", children: /* @__PURE__ */ l("div", { className: `bm-plan-block ${["blue", "amber", "mint", "lilac"][I % 4]}`, "data-dragging": h === C.id, style: { left: `${z.start / P * 100}%`, width: `${z.duration / P * 100}%` }, children: [
            /* @__PURE__ */ r("button", { type: "button", className: "bm-plan-event", title: `${C.title} · ${C.start} — ${C.end}`, "aria-label": `${C.title}, ${C.start} à ${C.end}. Flèches gauche et droite pour déplacer.`, onClick: () => {
              v.current || t(C.id);
            }, onPointerDown: (A) => N(A, C), onPointerMove: _, onPointerUp: () => j(), onPointerCancel: () => j(!0), onLostPointerCapture: () => j(), onKeyDown: (A) => G(A, C), children: /* @__PURE__ */ r("span", { children: C.title }) }),
            ["start", "end"].map((A) => /* @__PURE__ */ r("button", { type: "button", className: `bm-plan-resize ${A}`, title: A === "start" ? "Ajuster le début" : "Ajuster la fin", "aria-label": `${A === "start" ? "Ajuster le début" : "Ajuster la fin"} de ${C.title}. Flèches gauche et droite.`, onPointerDown: ($) => N($, C, A), onPointerMove: _, onPointerUp: () => j(), onPointerCancel: () => j(!0), onLostPointerCapture: () => j(), onKeyDown: ($) => G($, C, A), children: /* @__PURE__ */ r("span", {}) }, A))
          ] }) })
        ] }, C.id);
      })
    ] }) }),
    (T || o) && /* @__PURE__ */ r("div", { className: "bm-plan-detail", "aria-live": "polite", children: T ? /* @__PURE__ */ l(q, { children: [
      /* @__PURE__ */ r("span", { className: "bm-plan-dot blue" }),
      /* @__PURE__ */ r("strong", { children: T.title }),
      /* @__PURE__ */ l("span", { children: [
        T.start,
        " → ",
        T.end
      ] }),
      /* @__PURE__ */ r("span", { children: T.owner }),
      /* @__PURE__ */ r("button", { type: "button", onClick: () => p(null), "aria-label": "Fermer le détail", children: /* @__PURE__ */ r(mt, { size: 13 }) })
    ] }) : /* @__PURE__ */ l(q, { children: [
      /* @__PURE__ */ r(Gi, { size: 13 }),
      /* @__PURE__ */ r("span", { children: i === "en" ? "Drag to move · resize with either handle · use ← → on the keyboard." : "Glissez le bloc pour déplacer · étirez ses poignées aux deux extrémités · utilisez ← → au clavier." })
    ] }) }),
    /* @__PURE__ */ r("footer", { children: i === "en" ? "1-day increments · inclusive dates · synthetic plan" : "Pas de 1 jour · dates inclusives · flèches ← → au clavier · données de démonstration" })
  ] });
}
function Dh({ file: e, remove: t, removeLabel: n = "Remove", locale: i = "en-CA" }) {
  return /* @__PURE__ */ l("div", { className: "pc-attachment", children: [
    /* @__PURE__ */ r("span", { className: "pc-file-icon", children: /* @__PURE__ */ r(Ne, { size: 19 }) }),
    /* @__PURE__ */ l("div", { children: [
      /* @__PURE__ */ r("strong", { title: e.name, children: e.name }),
      /* @__PURE__ */ l("small", { children: [
        "Document · ",
        new Intl.NumberFormat(i, { maximumFractionDigits: 0 }).format(e.size / 1e3),
        " kB"
      ] })
    ] }),
    /* @__PURE__ */ r("button", { type: "button", "aria-label": `${n} ${e.name}`, onClick: t, children: /* @__PURE__ */ r(mt, { size: 12 }) })
  ] });
}
function Li({ label: e, icon: t, children: n, disabled: i = !1, open: a, setOpen: o }) {
  const s = Z(null), c = Z(null), d = () => {
    c.current && clearTimeout(c.current);
  };
  return ce(() => () => d(), []), /* @__PURE__ */ l("div", { className: "pc-menu-wrap", onMouseEnter: () => {
    d(), i || o(!0);
  }, onMouseLeave: () => {
    d(), c.current = setTimeout(() => o(!1), 160);
  }, onBlur: (p) => {
    p.currentTarget.contains(p.relatedTarget) || o(!1);
  }, onKeyDown: (p) => {
    var h;
    p.key === "Escape" && (o(!1), (h = s.current) == null || h.focus());
  }, children: [
    /* @__PURE__ */ l("button", { ref: s, type: "button", className: "pc-mode", "aria-expanded": a && !i, disabled: i, onClick: () => o(!a), onKeyDown: (p) => {
      p.key === "ArrowDown" && (p.preventDefault(), o(!0), requestAnimationFrame(() => {
        var h, f, u;
        return (u = (f = (h = s.current) == null ? void 0 : h.parentElement) == null ? void 0 : f.querySelector("input")) == null ? void 0 : u.focus();
      }));
    }, children: [
      t,
      e,
      /* @__PURE__ */ r(Ue, { size: 11 })
    ] }),
    a && !i && /* @__PURE__ */ r("div", { className: "pc-rich-menu", children: n })
  ] });
}
function np({ value: e, onChange: t, onSubmit: n, busy: i = !1, onStop: a, files: o = [], onFilesChange: s, mode: c, modes: d = [], onModeChange: p, sources: h = [], sourceOptions: f = [], onSourcesChange: u, label: g = "Your request", placeholder: m = "Ask a question or describe what you need…", caption: v, labels: y = {} }) {
  const [w, x] = H(null), [k, M] = H(""), P = Z(null), S = Z(null), D = ue();
  tn(() => {
    const R = S.current;
    R && (R.style.height = "auto", R.style.height = Math.min(230, Math.max(87, R.scrollHeight)) + "px");
  }, [e]);
  const E = () => {
    e.trim() && !i && n();
  }, T = (R) => (O) => x((L) => O ? R : L === R ? null : L);
  return /* @__PURE__ */ l("div", { className: "pc-demo", children: [
    /* @__PURE__ */ l("div", { className: `pc-composer ${i ? "is-running" : ""}`, children: [
      /* @__PURE__ */ r("div", { className: "pc-files", children: o.map((R) => /* @__PURE__ */ r(Dh, { file: R, removeLabel: y.remove, remove: () => !i && (s == null ? void 0 : s(o.filter((O) => O.id !== R.id))) }, R.id)) }),
      /* @__PURE__ */ r("textarea", { ref: S, "aria-label": g, placeholder: m, value: e, readOnly: i, onChange: (R) => t(R.target.value), onKeyDown: (R) => {
        R.key === "Enter" && (R.metaKey || R.ctrlKey) && !R.nativeEvent.isComposing && (R.preventDefault(), E());
      } }),
      /* @__PURE__ */ l("div", { className: "pc-tools", children: [
        s && /* @__PURE__ */ l(q, { children: [
          /* @__PURE__ */ r("input", { ref: P, type: "file", multiple: !0, hidden: !0, accept: ".pdf,.docx,.txt,.csv,.xlsx", onChange: (R) => {
            const O = Array.from(R.target.files ?? []), L = O.filter((N) => N.size <= 1e7);
            M(L.length < O.length ? y.fileError ?? "Some files exceed 10 MB. The others were added." : ""), s([...o, ...L.map((N) => ({ id: crypto.randomUUID(), name: N.name, size: N.size }))]), R.target.value = "";
          } }),
          /* @__PURE__ */ l("span", { className: "pc-attach-trigger", children: [
            /* @__PURE__ */ r("button", { type: "button", className: "pc-plus", "aria-label": y.attach ?? "Attach files", onClick: () => {
              var R;
              return (R = P.current) == null ? void 0 : R.click();
            }, disabled: i, children: /* @__PURE__ */ r(Rs, { size: 18 }) }),
            /* @__PURE__ */ l("span", { role: "tooltip", children: [
              y.attach ?? "Attach files",
              " · 10 MB max."
            ] })
          ] })
        ] }),
        c && p && /* @__PURE__ */ l(Li, { open: w === "mode", setOpen: T("mode"), disabled: i, icon: /* @__PURE__ */ r(sr, { size: 14 }), label: c, children: [
          /* @__PURE__ */ r("header", { children: /* @__PURE__ */ r("strong", { children: y.mode ?? "Work mode" }) }),
          d.map((R) => /* @__PURE__ */ l("label", { className: "pc-menu-option", children: [
            /* @__PURE__ */ r("input", { type: "radio", name: D, checked: c === R.value, onChange: () => p(R.value) }),
            /* @__PURE__ */ l("span", { children: [
              /* @__PURE__ */ r("strong", { children: R.value }),
              /* @__PURE__ */ r("small", { children: R.description })
            ] })
          ] }, R.value))
        ] }),
        u && /* @__PURE__ */ l(Li, { open: w === "sources", setOpen: T("sources"), disabled: i, icon: /* @__PURE__ */ r(ws, { size: 14 }), label: /* @__PURE__ */ l(q, { children: [
          y.sources ?? "Sources",
          " ",
          /* @__PURE__ */ r("span", { className: "pc-source-count", children: h.length })
        ] }), children: [
          /* @__PURE__ */ r("header", { children: /* @__PURE__ */ r("strong", { children: y.sources ?? "Sources" }) }),
          f.map((R) => /* @__PURE__ */ l("label", { className: "pc-menu-option", children: [
            /* @__PURE__ */ r("input", { type: "checkbox", checked: h.includes(R.value), onChange: () => u(h.includes(R.value) ? h.filter((O) => O !== R.value) : [...h, R.value]) }),
            /* @__PURE__ */ l("span", { children: [
              /* @__PURE__ */ r("strong", { children: R.value }),
              /* @__PURE__ */ r("small", { children: R.description })
            ] })
          ] }, R.value))
        ] }),
        /* @__PURE__ */ r("button", { type: "button", className: "pc-send", "aria-label": i ? y.stop ?? "Stop" : y.send ?? "Send request", disabled: i ? !a : !e.trim(), onClick: () => {
          i ? a == null || a() : E();
        }, children: i ? /* @__PURE__ */ r($s, { size: 13 }) : /* @__PURE__ */ r(qt, { size: 17 }) })
      ] })
    ] }),
    /* @__PURE__ */ l("div", { className: "pc-caption", children: [
      /* @__PURE__ */ r("span", { children: v }),
      /* @__PURE__ */ r("span", { children: h.join(" · ") })
    ] }),
    k && /* @__PURE__ */ r("p", { className: "pc-error", role: "alert", children: k })
  ] });
}
function rp({ items: e, selected: t, onSelect: n, disabled: i = !1 }) {
  return /* @__PURE__ */ r("div", { className: "pc-actions", children: e.map((a) => /* @__PURE__ */ l("button", { disabled: i, "aria-pressed": t === a.id, onClick: () => n(a.id), children: [
    /* @__PURE__ */ r("span", { className: "pc-action-icon", children: a.icon ?? /* @__PURE__ */ r(Xi, { size: 18 }) }),
    /* @__PURE__ */ r("span", { className: "pc-action-selected", "aria-hidden": "true", children: /* @__PURE__ */ r(te, { size: 12 }) }),
    /* @__PURE__ */ r("strong", { children: a.title }),
    /* @__PURE__ */ r("span", { children: a.description })
  ] }, a.id)) });
}
function ip({ title: e, description: t, children: n }) {
  return /* @__PURE__ */ l("div", { className: "pc-demo pc-panel", children: [
    e && /* @__PURE__ */ l("div", { className: "pc-intro", children: [
      /* @__PURE__ */ r(Xi, { size: 20 }),
      /* @__PURE__ */ r("h3", { children: e }),
      t && /* @__PURE__ */ r("p", { children: t })
    ] }),
    n
  ] });
}
function Ih({ title: e, children: t, onClose: n, drawer: i = !1, closeLabel: a = "Fermer" }) {
  const o = Z(null), s = Z(document.activeElement);
  return ce(() => {
    const c = o.current;
    return c == null || c.showModal(), () => {
      c == null || c.close();
      const d = s.current;
      requestAnimationFrame(() => {
        !(c != null && c.isConnected) && (d != null && d.isConnected) && d.focus();
      });
    };
  }, []), /* @__PURE__ */ r("dialog", { ref: o, className: `bm-ui bm-overlay ${i ? "bm-drawer" : ""}`, "aria-label": e, onCancel: (c) => {
    c.preventDefault(), n();
  }, onClick: (c) => {
    c.target === c.currentTarget && n();
  }, children: /* @__PURE__ */ l("div", { className: "bm-overlay-inner", children: [
    /* @__PURE__ */ l("header", { children: [
      /* @__PURE__ */ r("h2", { children: e }),
      /* @__PURE__ */ r(U, { small: !0, variant: "ghost", "aria-label": `${a} ${e}`, onClick: n, children: /* @__PURE__ */ r(mt, { size: 16 }) })
    ] }),
    t
  ] }) });
}
function ap({ title: e = "Filters", fields: t, values: n, onApply: i, defaults: a, applyLabel: o = "Apply filters", resetLabel: s = "Reset" }) {
  const [c, d] = H(!1), [p, h] = H(n), f = t.filter((u) => n[u.key] !== a[u.key]).length;
  return /* @__PURE__ */ l(q, { children: [
    /* @__PURE__ */ l(U, { onClick: () => {
      h(n), d(!0);
    }, children: [
      /* @__PURE__ */ r(As, { size: 14 }),
      e,
      f > 0 && ` · ${f}`
    ] }),
    c && /* @__PURE__ */ l(Ih, { title: e, closeLabel: "Close", onClose: () => d(!1), children: [
      /* @__PURE__ */ r("div", { className: "filter-body", children: t.map((u) => /* @__PURE__ */ l("fieldset", { children: [
        /* @__PURE__ */ r("legend", { children: u.label }),
        /* @__PURE__ */ r("div", { className: "filter-chips", children: u.options.map((g) => /* @__PURE__ */ r("button", { type: "button", "aria-pressed": p[u.key] === g, onClick: () => h((m) => ({ ...m, [u.key]: g })), children: g }, g)) })
      ] }, u.key)) }),
      /* @__PURE__ */ l("footer", { className: "filter-footer", children: [
        /* @__PURE__ */ r(U, { onClick: () => h(a), children: s }),
        /* @__PURE__ */ r(U, { variant: "primary", onClick: () => {
          i(p), d(!1);
        }, children: o })
      ] })
    ] })
  ] });
}
export {
  mf as AccessBoundary,
  ih as ActionFeedback,
  Ei as ActivityTimeline,
  _f as AgendaCards,
  Fs as AlertSurface,
  Jh as AmountInput,
  At as AnimatedReveal,
  $r as AppSelect,
  wf as ApprovalPanel,
  jh as AskIcon,
  of as BarChart,
  U as Button,
  ff as BuyerJourney,
  Rf as BuyerSuggestionCard,
  $t as Card,
  cr as CardHeader,
  Br as ChartFrame,
  rf as ChoiceCards,
  Wf as ComparisonChart,
  xf as Conversation,
  Ef as CriteriaStrip,
  ct as DataRow,
  _r as DataTable,
  ef as DatePicker,
  Ff as DealKanban,
  Gf as DepthChart,
  $f as DetailDrawer,
  kh as DistributionChart,
  Df as DocumentList,
  Rr as DropdownMenu,
  yn as DropdownMenuContent,
  Fe as DropdownMenuItem,
  Mi as DropdownMenuSeparator,
  Ar as DropdownMenuTrigger,
  Zi as EmptyState,
  Kf as EntityCell,
  cf as EvidenceMatrix,
  Mf as EvidenceViewer,
  If as ExecutionJournal,
  zs as Field,
  Jf as FileUploadButton,
  ap as FilterPanel,
  yf as GanttTimeline,
  Fo as Grid,
  lr as Input,
  bf as KanbanBoard,
  Fr as KeyValueList,
  zf as KpiCard,
  Bh as LibraryIcon,
  gf as MemorandumOverview,
  kf as MessageComposer,
  Wh as MetricCard,
  vf as MissionProgress,
  lf as NetworkExplorer,
  Zf as NextActionCell,
  zo as Notice,
  zh as OverviewIcon,
  tf as PageLayout,
  af as Pagination,
  Xf as PersonCell,
  Vf as PipelineChart,
  tp as PlanningGantt,
  Nf as ProfileCard,
  qf as ProgressCell,
  rp as PromptActionTiles,
  np as PromptBox,
  Tf as PromptComposer,
  ip as PromptPanel,
  sf as RangeChart,
  pf as ReadinessChecklist,
  hf as ReadinessFlow,
  Cf as ReportEditor,
  Uf as RichTable,
  Bo as Row,
  df as SectionNav,
  nf as SelectField,
  Af as ShortlistSummary,
  Sf as SourcedAnswer,
  Pf as SourcingTabs,
  Yf as SparklineCell,
  en as Stack,
  De as StatusBadge,
  Of as TextEditor,
  Hf as TrendChart,
  Vi as TrendsIcon,
  Qf as UploadCard,
  jf as ViewSelector,
  uf as WorkCard,
  Vh as WorkInbox,
  Lf as WorkspaceShell,
  Fn as motionTokens,
  ep as useUpload
};
