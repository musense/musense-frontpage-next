import React from "react";

export default function BtnMarketing({ name, to, title, onClick = null }) {
  return <a title={title} className={`btn-marketing ${name}`} href={to} >{title}</a>;
}
