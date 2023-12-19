import Image from './Image'
import Link from './Link'

function Card({ name, summary, imgSrc, href }) {
  return (
    <div className="group max-w-[544px] p-4 md:w-1/2">
      <div
        className={`${
          imgSrc && 'h-full'
        }  relative overflow-hidden rounded-md border border-gray-200 border-opacity-60 shadow-md dark:border-gray-700`}
      >
        {imgSrc &&
          (href ? (
            <Link scroll={false} href={href} aria-label={`Link to ${name} project `}>
              <Image
                alt={name}
                src={imgSrc}
                className="object-cover object-center md:h-36 lg:h-48"
                width={544}
                height={306}
              />
            </Link>
          ) : (
            <Image
              alt={name}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          ))}
        <div className="p-6">
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
            {href ? (
              <Link href={href} aria-label={`Link to ${name} project details`} scroll={false}>
                {name}
              </Link>
            ) : (
              name
            )}
          </h2>
          <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{summary}</p>
          {href && (
            <Link
              href={href}
              className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label={`Link to ${name} project details`}
              scroll={false}
            >
              Learn more &rarr;
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card
