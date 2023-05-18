import { NoMatchPageTemplate } from "@app/components/templates/NoMatchPageTemplate/NoMatchPageTemplate";
import { NotFoundContainer } from "@app/containers/NotFound/NotFoundContainer";

const NotFoundPage: React.FC = () => (
  <NoMatchPageTemplate>
    <NotFoundContainer />
  </NoMatchPageTemplate>
);

export default NotFoundPage;
