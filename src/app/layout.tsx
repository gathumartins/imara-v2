import type { Metadata } from "next";
import "./globals.css";

import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";

export const metadata: Metadata = {
  title: "Imara",
  description: "Imara design system",
};

export default async function RootLayout({

  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const query = `
  {
  topMenu:menu(id: "dGVybToy", idType: ID) {
    name
    menuItems {
      edges {
        node {
          id
          label
          uri
        }
      }
    }
  }
  programsMenu:  menu(id: "dGVybToz", idType: ID) {
    name
    menuItems(where: {parentId: "cG9zdDo0MQ=="}) {
      edges {
        node {
          id
          label
          uri
        }
      }
    }
  }
  orgMenu:  menu(id: "dGVybToz", idType: ID) {
    name
    menuItems(where: {parentId: "cG9zdDo0Mg=="}) {
      edges {
        node {
          id
          label
          uri
        }
      }
    }
  }
  quickMenu:  menu(id: "dGVybToz", idType: ID) {
    name
    menuItems(where: {parentId: "cG9zdDo0Mw=="}) {
      edges {
        node {
          id
          label
          uri
        }
      }
    }
  }

  layout: layout(id: "cG9zdDo5OQ==") {
    headerFooter {
      logo {
        node {
          sourceUrl
        }
      }
      register {
        registerTitle
        registerDescription
        buttonLink {
          title
          target
          url
        }
        video
        registerImage {
          node {
            sourceUrl
            mediaDetails {
              height
              width
            }
          }
        }
      }
    }
  }

  }`;
    const res = await fetch(
      `${process.env.WORDPRESS_API_URL}?query=${encodeURIComponent(query)}`,
      {
        headers: { "Content-Type": "application/json" },
        next: { revalidate: 60 },
      },
    );

    const data = await res.json();
    const mainMenu = data.data.topMenu.menuItems.edges;
    const programsMenu = data.data.programsMenu.menuItems.edges;
    const orgMenu = data.data.orgMenu.menuItems.edges;
    const quickMenu = data.data.quickMenu.menuItems.edges;
    const lay = data.data.layout.headerFooter;
    console.log("programs", programsMenu);
    console.log("orgs", orgMenu);
    console.log("quicks", quickMenu);
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body
        className="min-h-full flex flex-col font-sans"
        suppressHydrationWarning
      >
        <Navbar mainMenu={mainMenu} layoutData={lay} />
        <main className="flex-1">{children}</main>
        <Footer programs={programsMenu} orgs={orgMenu} quicks={quickMenu} />
      </body>
    </html>
  );
}
