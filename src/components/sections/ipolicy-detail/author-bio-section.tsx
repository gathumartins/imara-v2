export function AuthorBioSection({author}: {author: {name: string, avatarUrl?: string | null} | null}) {
  const authorInitial = author?.name?.charAt(0)?.toUpperCase() || "A"

  return (
    <div className="mt-12 flex items-center gap-4 border-t border-gray-100 pt-8">
      <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-navy-900 text-body-s font-bold text-white">
        {author?.avatarUrl ? (
          <img
            src={author.avatarUrl}
            alt={author.name}
            className="size-full object-cover"
          />
        ) : (
          authorInitial
        )}
      </div>
      <div>
        <p className="text-ui-bold text-navy-900">{author?.name || "Author"}</p>
        <p className="text-body-s text-gray-500">
          Imara Fellow
        </p>
      </div>
    </div>
  )
}
