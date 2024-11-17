import { SocialAccountsTypes } from "@/types";
import Image from "next/image";
import Link from "next/link";

import { social_accounts } from "@/data/social_accounts";

const Footer = () => {
  return (
    <footer className="row-start-3 w-full flex gap-6 opacity-50 py-12 flex-wrap items-center justify-between px-2">
      {social_accounts.map((account, i) => {
        return (
          <Link
            key={i}
            className="flex items-center gap-1 hover:underline hover:underline-offset-4"
            href={account.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {account.icon}
            <span className="hidden md:block">→ {account.title}</span>
          </Link>
        );
      })}
    </footer>
  );
};

export default Footer;