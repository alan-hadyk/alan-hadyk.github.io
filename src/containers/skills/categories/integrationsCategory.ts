import { IconStaticName } from "@app/components/atoms/IconStatic/@types/IconStatic";
import { iconsWithLabels } from "@app/components/molecules/IconsWithLabels/config";

export const integrationsCategory = {
  iconsWithLabels: iconsWithLabels.filter(({ iconName }) =>
    [
      IconStaticName.Auth0,
      IconStaticName.Plaid,
      IconStaticName.Sentry,
    ].includes(iconName),
  ),
  title: "Integrations",
};
