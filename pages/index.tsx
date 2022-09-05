import { Header } from "components/organisms/Header";
import { MainLayout } from "layouts/MainLayout";
import { TNextPageWithLayout } from "types/next";

const IndexPage: TNextPageWithLayout = () => (
  <>
    <Header zIndex="z-200" />
  </>
);

IndexPage.getLayout = (page) => (
  <MainLayout title="Alan Hadyk">{page}</MainLayout>
);

export default IndexPage;
