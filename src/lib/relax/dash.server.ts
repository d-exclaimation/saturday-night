import "server-only";

export type Dashboard = {
  dash: {
    id: string;
    name: string;
    review: number;
    reviewings: {
      id: string;
      name: string;
      reviewee: number;
    }[];
    reviewees: {
      id: string;
      name: string;
      reviewer: number;
    }[];
    avg: {
      reviewing: number;
      reviewed: number;
    };
  }[];
  max: number;
};

export const queryDashboard = async () => {
  const res = await fetch(`${process.env.RELAXING_URL}/dash`);
  return (await res.json()) as Dashboard;
};
