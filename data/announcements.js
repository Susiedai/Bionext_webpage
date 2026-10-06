/* ================================================================
   ANNOUNCEMENTS
   Short notices shown on the home page and the News & events page.
   Example:
   {text:"Your announcement here.", until:"2026-12-01"},
   - until (optional, YYYY-MM-DD): the announcement hides after this date
   - link, linkText (optional): adds a link/button to the announcement
   - featured:true, title (optional): shows it as a large banner at the
     very top of the home page
   ================================================================ */

const announcements = [
  {featured:true, title:"Help pick the date: Let Us Chat Pizza Party",
   text:"Join us at 6 pm in Lafferre Hall, Room W2012E. Fill out the poll to tell us which days work for you.",
   link:"https://www.when2meet.com/?39102005-bcoLG", linkText:"Fill out the poll", until:"2026-11-01"},
  {text:"Spring 2027 registration begins October 7. Talk with your advisor about your spring schedule before you register.", until:"2026-11-30"}
];
