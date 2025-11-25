import PageTitle from "@/components/PageTitle";
import PartiesTable from "./component/PartiesTable";

export default function PoliticalParties() {
  return (
    <div>
      <PageTitle
        title="নিবন্ধিত রাজনৈতিক দল (৫৭)"
        routes={["হোম", "নিবন্ধিত রাজনৈতিক দল"]}
      />

      <div className="w-full overflow-x-auto mt-4">
        <PartiesTable />
      </div>
    </div>
  );
}
