import { queryDashboard } from "@/lib/relax/dash.server";
import { page } from "@d-exclaimation/next";
import Charts from "./charts";

export default page(async () => {
  const dashboard = await queryDashboard();

  return (
    <div className="w-full md:w-3xl flex flex-col items-start justify-center md:my-2 p-4">
      <div className="w-full flex flex-col gap-2 md:grid md:grid-cols-2 md:gap-3">
        {dashboard.dash.map(
          ({ id, name, review, reviewings, avg, ...rest }) => {
            return (
              <div
                key={`member-stats-${id}`}
                className="flex flex-col w-full gap-1 bg-white rounded-md md:shadow p-1"
              >
                {/* Profile Display */}
                <div
                  key={`profile-${id}`}
                  className="flex flex-row items-center justify-between w-full p-2"
                >
                  <div className="flex flex-row items-center justify-start">
                    <img
                      className="w-10 h-10 rounded-full object-cover"
                      src={`/members/${id}.webp`}
                    />
                    <div className="ml-2 flex flex-col items-start justify-center gap-1">
                      <span className="font-medium text-sm">{name}</span>
                      <span className="font-light text-xs text-black/60">
                        {id}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Stats */}

                <Charts
                  max={dashboard.max}
                  id={id}
                  name={name}
                  review={review}
                  reviewings={reviewings}
                  avg={avg}
                  {...rest}
                />
              </div>
            );
          }
        )}
      </div>
    </div>
  );
});

export const revalidate = 0;
export const runtime = "edge";
