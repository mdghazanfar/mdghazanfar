// components/ProjectsSection.tsx
const ProjectsSection = () => (
  <section
    id='projects'
    className='py-20 bg-gray-100 dark:bg-gray-900 text-center'
  >
    <h2 className='text-4xl font-bold'>My Projects</h2>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
      <div className='bg-gray-300 dark:bg-gray-700 p-4 rounded-lg'>
        Project 1
      </div>
      <div className='bg-gray-300 dark:bg-gray-700 p-4 rounded-lg'>
        Project 2
      </div>
      <div className='bg-gray-300 dark:bg-gray-700 p-4 rounded-lg'>
        Project 3
      </div>
    </div>
  </section>
);

export default ProjectsSection;
