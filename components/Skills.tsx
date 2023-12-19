import skillsData from '@/data/skillsData'

function Skills() {
  return (
    <div className="space-y-3 divide-y divide-gray-700">
      <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        Skills
      </h1>
      <div className="py-4 text-black dark:text-gray-300 ">
        <h2 className="">Some of the technologies I've worked with include: </h2>
        <ul className="list-inside list-disc space-y-1 ">
          {Object.keys(skillsData).map((category) => (
            <li>
              <span className="font-semibold text-primary-500">
                {category.charAt(0).toUpperCase().concat(category.slice(1))}
              </span>
              : {skillsData[category].join(', ')}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Skills
