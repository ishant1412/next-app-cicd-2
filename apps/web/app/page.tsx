import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { prisma } from "@repo/db";




const ThemeImage = async () => {

  const user =await prisma.user.findFirst()

  return (
    <>
    {user?.email}
    </>
  );
};

export default function Home() {
  return (
    <>
    <ThemeImage/>
    </>
  );
}
