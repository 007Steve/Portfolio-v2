import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Nav from "./components/Nav";
import ScrollDown from "./components/ScrollDown";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import SkillsCard from "./components/SkillsCard";
import ProjectCard from "./components/ProjectCard";
import Form from "./components/Form";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Stephen Plummer</title>
        <meta name="description" content="Stephen Plummer" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>

      <section className={styles.headerSection}>
        <ScrollDown />
      </section>
      <section className={styles.aboutSection}>
        <div className={styles.aboutSection__container}>
          <div className={styles.aboutSection__textsContainer}>
            <h1 className={styles.aboutSection__nameSpan}>I'm</h1>
            <h1 className={styles.aboutSection__name}> Stephen Plummer</h1>
          </div>

          <p className={styles.aboutSection__p}>
            <strong>React</strong> repellat, maxime officiis ex quis nisi, quasi
            veniam eaque reiciendis, <strong>WebGL</strong> est quos quas facere
            suscipit natus sed.
          </p>
          <p className={styles.aboutSection__p}>
            <strong>React</strong> repellat, maxime officiis ex quis nisi, quasi
            veniam eaque reiciendis, <strong>WebGL</strong> est quos quas facere
            suscipit natus sed.
          </p>
          <div>
            <TwitterIcon
              className={`${styles.aboutSection__icon} ${styles.twitter}`}
            />
            <LinkedInIcon
              className={`${styles.aboutSection__icon} ${styles.linkedin} `}
            />
            <GitHubIcon
              className={`${styles.aboutSection__icon} ${styles.github}`}
            />
          </div>
          <p className={styles.aboutSection__line}></p>
        </div>
        <img
          className={styles.aboutSection__photo}
          src="/headshot.png"
          alt=""
        />
      </section>
      <section className={styles.skillsSection}>
        <h1>What I can do</h1>
        <div className={styles.skillsSection__container}>
          <SkillsCard
            title="Front-End"
            img="/reactlogo.png"
            p={[
              "Develop user-frienly website that are responsive with frameworks",
              <strong> React </strong>,
              "and ",
              <strong> NextJS </strong>,
            ]}
          />
          <SkillsCard
            title="Back-End"
            img="/pngkey.com-database-icon-png-2317080.png"
            color="orange"
            p={[
              "Build and maintain the application ",
              <strong> Servers </strong>,
              "and ",
              <strong> Database</strong>,
              "with",
              <strong> Node JS</strong>,
            ]}
          />
          <SkillsCard
            title="Spatial Web"
            img="/Daco_158498.png"
            color="purple"
            p={[
              "Develop user-frienly website that are responsive with technologies",
              <strong> AR </strong>,
              "and ",
              <strong> VR </strong>,
            ]}
          />
        </div>
      </section>
      <section className={styles.projectsSection}>
        <h1 className={styles.title}>Portfolio</h1>

        <div className={styles.projectsSection__container}>
          <ProjectCard color="music" img="/music_logo.png" />
          <ProjectCard
            color="pink"
            // img="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=399&h=399"
          />
          <ProjectCard
            color="chat"
            // img="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=399&h=399"
          />
          <ProjectCard
            color="blue"
            // img="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=399&h=399"
          />
        </div>
      </section>
      <section className={styles.contactSection}>
        <Form />
        <div className={styles.footer__sectionFooter}>
          <p> © Stephen Plummer</p>
          <div className={styles.footer__sectionAboutIcons}>
            <TwitterIcon
              fontSize="small"
              className={`${styles.footer__sectionAboutIcons} ${styles.twitter}`}
            />
            <LinkedInIcon
              fontSize="small"
              className={`${styles.footer__sectionAboutIcons} ${styles.linkedin}`}
            />
            <GitHubIcon
              fontSize="small"
              className={`${styles.footer__sectionAboutIcons} ${styles.github}`}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
