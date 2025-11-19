import CategoryFilter from "@/components/shared/CategoryFilter";
import Collection from "@/components/shared/Collection";
import Search from "@/components/shared/Search";
import { Button } from "@/components/ui/button";
import { SearchParamProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { getAllEvents } from "@/lib/actions/event.actions";

export default async function Home({ searchParams }: SearchParamProps) {
  const params = await searchParams;
  const page = Number(params?.page) || 1;
  const searchText = (params?.query as string) || "";
  const category = (params?.category as string) || "";

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 6,
  });

  return (
    <>
      <section className="bg-gray-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="font-bold text-[40px] leading-12 lg:text-[48px] lg:leading-[60px] xl:text-[58px] xl:leading-[74px];">
              Host, Connect, Celebrate: Your Events, Our Platform!
            </h1>
            <p className="text-[20px] font-normal leading-[30px] tracking-[2%] md:font-normal md:text-[24px] md:leading-9">
              Book and learn helpful tips from 3,168+ mentors in world-class
              companies with our global community.
            </p>
            <Button
              size="lg"
              asChild
              className="rounded-full h-[54px] p-regular-16 w-full sm:w-fit background-color:lab(41 13.39 -59.86)"
            >
              <Link href="#events">Explore Now</Link>
            </Button>
          </div>
          <Image
            src="/assets/images/hero.png"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>

      <section
        id="events"
        className="max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="font-bold text-[32px] leading-10 lg:text-[36px] lg:leading-11 xl:text-[40px] xl:leading-12">
          Trust by <br /> Thousands of Events
        </h2>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          <Search />
          <CategoryFilter />
        </div>

        <Collection
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={page}
          totalPages={events?.totalPages}
        />
      </section>
    </>
  );
}
