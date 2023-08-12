import { instructionsChecker } from "./helpers";
import { AppRouter } from "./router/AppRouter";

export const GeppettoApp = () => {
  instructionsChecker();
  return <AppRouter />;
};
