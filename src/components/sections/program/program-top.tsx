import React from 'react'

function ProgramTop({ title, content }: { title?: string | null; content?: string | null }) {
  return (
    <section className="bg-white pt-10 md:pt-14">
      <div className="container-page flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <p className="text-tag text-gold-500">Programs</p>
          <h2 className="text-h3 text-navy-900">{title}</h2>
          <div
            className="w-full text-body-s text-gray-500"
            dangerouslySetInnerHTML={{ __html: content ?? "" }}
          />
        </div>
      </div>
    </section>
  );
}

export default ProgramTop