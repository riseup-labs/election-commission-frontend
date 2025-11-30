import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function NavMenu() {
  return (
    <nav className="w-full bg-[#009951] shadow-lg py-2">
      <div className="container mx-auto">
        <NavigationMenu className="w-full justify-start" viewport={false}>
          <NavigationMenuList className="flex flex-wrap gap-1">
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className="px-3 py-2 text-sm font-medium hover:bg-[#006C39] rounded transition-colors text-white hover:text-white"
              >
                <Link href={"/"}>হোম</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {menuContents.map((content) => (
              <NavigationMenuItem key={content.title}>
                <NavigationMenuTrigger className="px-3 py-2 text-sm font-medium text-white bg-transparent cursor-pointer hover:bg-[#006C39] data-[state=open]:hover:bg-[#006C39]">
                  {content?.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="z-20 p-0 shadow-none border-0 data-[state=open]:border-0 data-[state=closed]:border-0 data-[motion=from-start]:border-0 data-[motion=from-end]:border-0 data-[motion=to-start]:border-0 data-[motion=to-end]:border-0">
                  <div className="min-w-[900px] bg-white shadow p-3 grid gap-3 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
                    {content?.submenu?.map((menu, i) => (
                      <div key={i} className="">
                        <p className="text-sm text-[#006C39] font-semibold">
                          {menu?.title}
                        </p>

                        <div className="mt-2">
                          {menu?.lists?.map((list, i) => (
                            <p
                              key={i}
                              className="text-sm py-2 border-b border-[#F4F5F6]"
                            >
                              {list?.title}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className="px-3 py-2 text-sm font-medium hover:bg-[#006C39] rounded transition-colors text-white hover:text-white"
              >
                <Link href={"/president-election"}>রাষ্ট্রপতি নির্বাচন</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className="px-3 py-2 text-sm font-medium hover:bg-[#006C39] rounded transition-colors text-white hover:text-white"
              >
                <Link href={"/parliamentary-election"}>
                  জাতীয় সংসদ নির্বাচন
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className="px-3 py-2 text-sm font-medium hover:bg-[#006C39] rounded transition-colors text-white hover:text-white"
              >
                <Link href={"/political-parties"}>রাজনৈতিক দলসমূহ</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className="px-3 py-2 text-sm font-medium hover:bg-[#006C39] rounded transition-colors text-white hover:text-white"
              >
                <Link href={"/election-commissioners"}>
                  নির্বাচন কমিশন পরিচিতি
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className="px-3 py-2 text-sm font-medium hover:bg-[#006C39] rounded transition-colors text-white hover:text-white"
              >
                <Link href={"/secretariat-officials"}>
                  সচিবালয়ের কর্মকর্তাবৃন্দ
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className="px-3 py-2 text-sm font-medium hover:bg-[#006C39] rounded transition-colors text-white hover:text-white"
              >
                <Link href={"/videos"}>ভিডিও</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}

const menuContents = [
  {
    title: "কর্মসংস্থান পরিচিতি",
    submenu: [
      {
        title: "রাষ্ট্রীয় নির্বাচন",
        lists: [
          {
            title: "তফসিল/সার্কুলার/গেজেট",
            href: "/",
          },
          {
            title: "নির্বাচনি ফলাফল",
            href: "/",
          },
          {
            title: "গেজেট",
            href: "/",
          },
        ],
      },
      {
        title: "জাতীয় সংসদ নির্বাচন",
        lists: [
          {
            title: "তফসিল/সার্কুলার/গেজেট",
            href: "/",
          },
          {
            title: "হলফনামা",
            href: "/",
          },
          {
            title: "নির্বাচনি ফলাফল",
            href: "/",
          },
          {
            title: "গেজেট",
            href: "/",
          },
        ],
      },
      {
        title: "জাতীয় সংসদ নির্বাচন",
        lists: [
          {
            title: "তফসিল/সার্কুলার/গেজেট",
            href: "/",
          },
          {
            title: "হলফনামা",
            href: "/",
          },
          {
            title: "নির্বাচনি ফলাফল",
            href: "/",
          },
          {
            title: "গেজেট",
            href: "/",
          },
        ],
      },
      {
        title: "জাতীয় সংসদ নির্বাচন",
        lists: [
          {
            title: "তফসিল/সার্কুলার/গেজেট",
            href: "/",
          },
          {
            title: "হলফনামা",
            href: "/",
          },
          {
            title: "নির্বাচনি ফলাফল",
            href: "/",
          },
          {
            title: "গেজেট",
            href: "/",
          },
        ],
      },
      {
        title: "জাতীয় সংসদ নির্বাচন",
        lists: [
          {
            title: "তফসিল/সার্কুলার/গেজেট",
            href: "/",
          },
          {
            title: "হলফনামা",
            href: "/",
          },
          {
            title: "নির্বাচনি ফলাফল",
            href: "/",
          },
          {
            title: "গেজেট",
            href: "/",
          },
        ],
      },
    ],
  },
  {
    title: "নির্বাচনসমূহ",
    submenu: [
      {
        title: "রাষ্ট্রীয় নির্বাচন",
        lists: [
          {
            title: "তফসিল/সার্কুলার/গেজেট",
            href: "/",
          },
          {
            title: "নির্বাচনি ফলাফল",
            href: "/",
          },
          {
            title: "গেজেট",
            href: "/",
          },
        ],
      },
      {
        title: "রাষ্ট্রীয় নির্বাচন",
        lists: [
          {
            title: "তফসিল/সার্কুলার/গেজেট",
            href: "/",
          },
          {
            title: "হলফনামা",
            href: "/",
          },
          {
            title: "নির্বাচনি ফলাফল",
            href: "/",
          },
          {
            title: "গেজেট",
            href: "/",
          },
        ],
      },
    ],
  },
];
