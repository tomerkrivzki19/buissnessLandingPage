import React from "react";
import {
  Bars4Icon,
  CalendarIcon,
  CheckIcon,
  PlusIcon,
  UsersIcon,
  ViewColumnsIcon,
  ArrowTrendingUpIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";

// const features = [
//   {
//     name: "List view",
//     icon: Bars4Icon,
//     description:
//       "Nunc a, lacinia sed risus neque, arcu, rhoncus. Id mauris justo facilisis aliquam platea vestibulum condimentum morbi.",
//   },
//   {
//     name: "Boards",
//     icon: ViewColumnsIcon,
//     description:
//       "Purus lobortis volutpat posuere id integer nunc tellus. Non mauris malesuada feugiat massa mi pellentesque cum est. Pharetra a varius urna rhoncus, tempor rutrum.",
//   },
//   {
//     name: "Calendar",
//     icon: CalendarIcon,
//     description:
//       "Purus lobortis volutpat posuere id integer nunc tellus. Non mauris malesuada feugiat massa mi pellentesque cum est. Pharetra a varius urna rhoncus, tempor rutrum.",
//   },
//   {
//     name: "Teams",
//     icon: UsersIcon,
//     description:
//       "Tincidunt sollicitudin interdum nunc sit risus at bibendum vitae. Urna, quam ut sit justo non, consectetur et varius.",
//   },
// ];
const features = [
  {
    name: "תצוגת רשימה",
    icon: Bars4Icon,
    description:
      "כך שאתם תוכלו להציג את המוצרים שלכם בצורה מאורגנת וברורה בלוח הבקרה של Shopify באתר ובאפליקציה, עם רשימות המוצרים שניתן למיין ולסנן בקלות, כך שתוכלו לנהל את המלאי שלכם בצורה אופטימלית ולהבטיח שללקוחות יהיה קל למצוא את המוצרים שאתם מציעים.",
  },
  {
    // name: "לוחות עבודה",
    name: "מעקב כניסות ומכירות",
    // icon: ViewColumnsIcon,
    icon: ArrowTrendingUpIcon,
    description:
      "עקוב אחרי תנועת הלקוחות בחנות שלך ומדוד את המכירות בקלות. כלים אלו מאפשרים לך להפיק דוחות ולבצע אופטימיזציה לקמפיינים ולמכירות.",
  },
  {
    name: "מערכת סליקה ",
    icon: CreditCardIcon,
    description:
      "מערכת סליקה מתקדמת ומאובטחת שתאפשר לך לנהל את כל תשלומי הלקוחות בצורה פשוטה ויעילה. , תוכל לקלוט תשלומים מכל סוגי כרטיסי האשראי ודרכי תשלום נוספות בצורה חלקה ומאובטחת.",
  },
  {
    name: "צוותים",
    icon: UsersIcon,
    description:
      "שירות מקצועי הכולל צוות מפתחים ומעצבים שיבנו לכם את האתר בצורה מותאמת אישית. תיהנו ממערכת עבודה מסודרת שתתמוך בשיתוף פעולה בין הצוותים השונים, ותספק חווית קנייה חלקה ומקצועית ללקוחותיכם.",
  },
];

// const checklist = [
//   "Unlimited projects",
//   "No per user fees",
//   "Unlimited storage",
//   "24/7 support",
//   "Cancel any time",
//   "14 days free",
// ];
const checklist = [
  "תקנון + נגישות",
  "מערכת סליקה ",
  //   "אחסון ללא הגבלה",
  "ליווי  הקשור לאתר ולעסק",
  "תמיכה 24/7",
  "ביטול המנוי בכל זמן",
  "תחזוק השרת של האתר",
];

function Prices() {
  return (
    <>
      {/* <div className="relative bg-white" id="Pricing" dir="rtl">
        <div aria-hidden="true" className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-purple-400" />
        </div>
        <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:px-8">
          <div className="bg-white px-6 py-16 sm:py-24 lg:px-0 lg:pl-8">
            <div className="mx-auto max-w-lg lg:mx-0">
              <h2 className="text-lg font-semibold text-purple-600">
                Full-featured
              </h2>
              <p className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
                Everything you need to talk with your customers
              </p>
              <dl className="mt-12 space-y-10">
                {features.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt>
                      <div className="absolute flex size-12 items-center justify-center rounded-md bg-purple-400">
                        <feature.icon
                          aria-hidden="true"
                          className="size-6 text-white"
                        />
                      </div>
                      <p className="mr-16 text-lg/6 font-medium text-gray-900">
                        {feature.name}
                      </p>
                    </dt>
                    <dd className="mr-16 mt-2 text-base text-gray-500">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="bg-purple-400 px-6 py-16 sm:py-24 lg:flex lg:items-center lg:justify-start lg:bg-none lg:px-0 lg:pr-8">
            <div className="mx-auto w-full max-w-lg space-y-8 lg:mx-0">
              <div>
                <h2 className="sr-only">Price</h2>
                <p className="relative grid grid-cols-2">
                  <span className="flex flex-col text-center">
                    <span className="text-5xl font-bold tracking-tight text-white">
                      $99
                    </span>
                    <span className="mt-2 text-base font-medium text-purple-600">
                      Setup fee
                    </span>
                    <span className="sr-only">plus</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute flex h-12 w-full items-center justify-center"
                  >
                    <PlusIcon
                      aria-hidden="true"
                      className="size-6 text-indigo-300"
                    />
                  </span>
                  <span>
                    <span className="flex flex-col text-center">
                      <span className="text-5xl font-bold tracking-tight text-white">
                        $4
                      </span>
                      <span className="mt-2 text-base font-medium text-purple-600">
                        Per month
                      </span>
                    </span>
                  </span>
                </p>
              </div>
              <ul
                role="list"
                className="grid gap-px overflow-hidden rounded sm:grid-cols-2"
              >
                {checklist.map((item) => (
                  <li
                    key={item}
                    className="flex items-center space-x-3 bg-purple-800/50 px-4 py-4 text-base text-white"
                  >
                    <CheckIcon
                      aria-hidden="true"
                      className="size-6 text-indigo-300"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-4 text-lg/6 font-medium text-purple-600 hover:bg-purple-50 md:px-10"
              >
                Get started today
              </a>
              <a
                href="#"
                className="block text-center text-base font-medium text-purple-700 hover:text-white"
              >
                Try our Lite plan for free
              </a>
            </div>
          </div>
        </div>
      </div> */}

      <div className="relative bg-white" dir="rtl">
        <div aria-hidden="true" className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-purple-400" />
        </div>
        <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:px-8">
          <div className="bg-white px-6 py-16 sm:py-24 lg:px-0 lg:pl-8">
            <div className="mx-auto max-w-lg lg:mx-0">
              <h2 className="text-lg font-semibold text-purple-600">
                תכונות מלאות
              </h2>
              <p className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
                כל מה שצריך כדי לתקשר עם הלקוחות שלך
              </p>
              <dl className="mt-12 space-y-10">
                {features.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt>
                      <div className="absolute flex size-12 items-center justify-center rounded-md bg-purple-400">
                        <feature.icon
                          aria-hidden="true"
                          className="size-6 text-white"
                        />
                      </div>
                      <p className="mr-16 text-lg/6 font-medium text-gray-900">
                        {feature.name}
                      </p>
                    </dt>
                    <dd className="mr-16 mt-2 text-base text-gray-500">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div
            className="bg-purple-400 px-6 py-16 sm:py-24 lg:flex lg:items-center lg:justify-start lg:bg-none lg:px-0 lg:pr-8"
            id="Pricing"
          >
            <div className="mx-auto w-full max-w-lg space-y-8 lg:mx-0">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl text-center">
                Special Offer
              </h1>

              <h1
                className="block text-center text-base font-medium text-purple-700"
                dir="ltr"
              >
                {" "}
                {/* החבליה הבסיסית */}
                {/* Basic -For Small Buissness */}
                <h3 className="mt-5 font-display text-lg text-white">
                  {" "}
                  Small business
                </h3>{" "}
                לעסקים קטנים עד 50 מוצרים
              </h1>
              <div>
                <h2 className="sr-only">מחיר</h2>
                <p className="relative grid grid-cols-2">
                  <span className="flex flex-col text-center">
                    <span className="sm:text-5xl text-4xl  font-bold tracking-tight text-white">
                      ₪5,000
                    </span>
                    <span className="mt-2 text-base font-medium text-purple-600">
                      דמי התקנה
                    </span>
                    <span className="sr-only">ועוד</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute flex h-12 w-full items-center justify-center"
                  >
                    <PlusIcon
                      aria-hidden="true"
                      className="size-6 text-indigo-300"
                    />
                  </span>
                  <span>
                    <span className="flex flex-col text-center">
                      <span className="sm:text-5xl text-4xl  font-bold tracking-tight text-white">
                        ₪1,293
                      </span>
                      <span className="mt-2 text-base font-medium text-purple-600">
                        לשנה
                      </span>
                    </span>
                  </span>
                </p>
              </div>
              <ul
                role="list"
                className="grid gap-px overflow-hidden rounded sm:grid-cols-2"
              >
                {checklist.map((item) => (
                  <li
                    key={item}
                    className="flex items-center space-x-3 bg-purple-800/50 px-4 py-4 text-base text-white"
                  >
                    <CheckIcon
                      aria-hidden="true"
                      className="size-6 text-indigo-300"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-4 text-lg/6 font-medium text-purple-600 hover:bg-purple-50 md:px-10"
              >
                התחל היום
              </a>
              <a
                href="#"
                className="block text-center text-base font-medium text-purple-700 hover:text-white"
              >
                {/* נסה את תוכנית הלייט שלנו בחינם */}
                בדקו את המסלולים השונים שמתאימים לעסק שלכם
                <span aria-hidden="true" className="pr-2">
                  &larr;
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Prices;
