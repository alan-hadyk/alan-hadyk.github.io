import { NoMatchPageTemplate } from "@app/components/templates/NoMatchPageTemplate/NoMatchPageTemplate";
import { NotFoundContainer } from "@app/containers/notFound/NotFoundContainer";

const NotFoundPage: React.FC = () => (
  <NoMatchPageTemplate>
    <NotFoundContainer />
  </NoMatchPageTemplate>
);

export default NotFoundPage;
