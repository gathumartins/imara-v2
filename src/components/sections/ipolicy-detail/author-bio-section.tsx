export function AuthorBioSection({author}: {author: {name: string, avatar: {url: string}} | null}) {
  return (
    <div className="mt-12 flex items-center gap-4 border-t border-gray-100 pt-8">
      <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-navy-900 text-body-s font-bold text-white">
        {author?.avatar?.url ? (
          <img
            src={author.avatar.url}
            alt={author.name}
            className="size-full object-cover"
          />
        ) : (
          author?.name?.charAt(0)?.toUpperCase() || "A"
        )}
      </div>
      <div>
        <p className="text-ui-bold text-navy-900">{author?.name || "Author"}</p>
        <p className="text-body-s text-gray-500">
          Imara Fellowship
        </p>
      </div>
    </div>
  )
}
