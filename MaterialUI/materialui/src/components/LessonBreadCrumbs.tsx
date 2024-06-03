import { Link, Breadcrumbs, Stack } from "@mui/material";

function LessonBreadCrumbs() {
  return (
    <Stack>
      {/* seperator, ayracı özelleştirmeye yarar. max items arada gösterilecek eleman sayısı.  */}
      <Breadcrumbs separator=">" maxItems={2}>
        <Link href="/" underline="hover">
          Anasayfa
        </Link>
        <Link href="/" underline="hover">
          Blog
        </Link>
        <Link underline="none">Osman Yıldız</Link>
        <Link underline="none">Osman Yıldız</Link>
        <Link underline="none">Osman Yıldız</Link>
        <Link underline="none">Osman Yıldız</Link>
      </Breadcrumbs>
    </Stack>
  );
}

export default LessonBreadCrumbs;
