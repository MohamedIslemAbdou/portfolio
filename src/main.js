import("../styles/animations/animations.css", { async: true });
import("../styles/modern-normalize.css", { async: true });
import("../styles/style.css", { async: true });
import("../styles/components/header.css", { async: true });
import("../styles/components/hero.css", { async: true });
import("../styles/components/about.css", { async: true });
import("../styles/components/work.css", { async: true });
import("../styles/components/contact.css", { async: true });
import("../styles/components/footer.css", { async: true });
import("../styles/components/background.css", { async: true });
import("../styles/components/mobile-nav.css", { async: true });

import("../styles/utils.css", { async: true });

import mobileNav from "./utils/mobile-nav";
import darkMode from "./utils/dark-mode";
import lazyLoading from "./utils/lazy-loading";

mobileNav();
darkMode();
lazyLoading();
