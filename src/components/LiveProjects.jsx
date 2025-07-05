// components/LiveProjects.jsx
const projects = [
  {
    name: 'TaskBoard Pro',
    description: 'A kanban-style task manager built with React and Firebase.',
    liveUrl: 'https://taskboardpro-demo.vercel.app',
    codeUrl: 'https://github.com/demo/taskboardpro',
    image: 'https://via.placeholder.com/300x200?text=TaskBoard+Pro'
, // placeholder image
  },
  {
    name: 'Eventify',
    description: 'Host and manage events with RSVP and ticket tracking.',
    liveUrl: 'https://eventify-demo.vercel.app',
    codeUrl: 'https://github.com/demo/eventify',
    image: 'https://via.placeholder.com/300x200?text=TaskBoard+Pro'
,
  },
  {
    name: 'ShopSmart UI Kit',
    description: 'Reusable and responsive UI components for eCommerce apps.',
    liveUrl: 'https://shopsmart-ui.vercel.app',
    codeUrl: 'https://github.com/demo/shopsmart-ui',
    image: 'https://via.placeholder.com/300x200?text=TaskBoard+Pro'
,
  },
];

export default function LiveProjects() {
  return (
    <section className="bg-black py-16 px-4" id="projects">
      <h2 className="text-3xl text-white font-bold text-center mb-12">🚀 Live Project Demos</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-900 rounded-lg shadow-md p-6">
            <img src={project.image} alt={project.name} className="rounded mb-4 w-full h-40 object-cover" />
            <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                View Live
              </a>
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded"
              >
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
