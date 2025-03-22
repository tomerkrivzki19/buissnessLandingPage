import React from "react";

function Hero() {
  return (
    <div className="relative bg-white text-right hero-pattrens">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-48 lg:pt-40 xl:col-span-6">
          <div className="mx-auto max-w-lg lg:mx-0 ">
            {/* <div className="hidden sm:mt-32 sm:flex lg:mt-16" dir="rtl">
              <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                פיתוח חנויות אונליין מתקדמות עם אינטגרציה מושלמת ל-Shopify
                <a
                  href="#"
                  className="whitespace-nowrap font-semibold text-indigo-600"
                >
                  <span aria-hidden="true" className="absolute inset-0" />
                  קרא עוד <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div> */}
            <h1 className="mt-24 text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:mt-10 sm:text-7xl">
              בנו את העתיד של העסק שלכם עם חנות אונליין שתמנף את הרווחים
            </h1>
            <p
              className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8"
              dir="rtl"
            >
              אנחנו מתמחים בהקמה ושדרוג של חנויות Shopify עבור עסקים מקומיים
              בישראל, עם פתרונות אינטגרציה חכמים שמעניקים חווית משתמש מעולה
              וניהול פשוט. הצטרפו אלינו ופתחו דלתות לעסק מצליח יותר עם חנות
              אונליין שמייצרת רווחים.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#Pricing"
                dir="rtl"
                className="rounded-md bg-purple-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                קבלו הצעה משתלמת עכשיו!{" "}
              </a>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.shopify.com/"
                className="text-sm/6 font-semibold text-gray-900"
              >
                למידע נוסף <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img
            alt="פתרונות אינטגרציה לעסק"
            src="https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg"
            // src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80"
            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
