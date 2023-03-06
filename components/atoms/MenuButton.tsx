import {
  IMenuButtonLineProps,
  IMenuButtonProps
} from "components/atoms/@types/MenuButton";
import { LayoutContainer } from "components/layout/LayoutContainer";
import { trimTemplateLiteral } from "helpers/strings/trimTemplateLiteral";

const MenuButtonLine = ({ isOpen }: IMenuButtonLineProps) => (
  <span
    className={trimTemplateLiteral(`
      bg-white 
      left-0 absolute
      h-2 w-full 
      transition-all duration-fast ease-in-out

      first:top-0 secondChild:top-14 thirdChild:top-14 fourthChild:top-28

      ${
        isOpen &&
        `
        first:left-50% first:top-14 first:w-0
        secondChild:rotate-[40deg]
        thirdChild:rotate-[-40deg]
        fourthChild:left-50% fourthChild:top-14 fourthChild:w-0
      `
      }
    `)}
  />
);

const MenuButton: React.FC<IMenuButtonProps> = ({
  isOpen = false,
  onClick
}) => (
  <LayoutContainer
    aria-label="MenuButton"
    className={`
      bg-none cursor-pointer 
      h-30 w-48
      relative
      transition-all duration-fast ease-in-out
      z-1100

      hover:drop-shadow-md
    `}
    onClick={onClick}
  >
    <MenuButtonLine isOpen={isOpen} />
    <MenuButtonLine isOpen={isOpen} />
    <MenuButtonLine isOpen={isOpen} />
    <MenuButtonLine isOpen={isOpen} />
  </LayoutContainer>
);

export { MenuButton };
