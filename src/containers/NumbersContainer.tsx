import { MainLayout } from "@/src/layouts/Layout";
import { NumberForm } from "@/src/components/Forms";
import { NumberTable } from "@/src/components/Tables";

export const NumbersContainer = () => {
  return (
    <MainLayout>
      <h1>Numbers</h1>
      <NumberForm />
      <NumberTable />
    </MainLayout>
  );
};
