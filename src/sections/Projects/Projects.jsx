import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import click from './click.png'
import clicks from './clicks.png'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={clicks}
          link="https://clicks.ge/"
          h3="clicks.ge"
          p="Small Business"
        />
        <ProjectCard
          src={click}
          link="https://click.ge/"
          h3="click.ge"
          p="Online Shop"
        />
      </div>
    </section>
  );
}

export default Projects;
