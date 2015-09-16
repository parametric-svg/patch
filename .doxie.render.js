module.exports = (doc) => (
`<h3><pre>
${doc.data.tags
  .find(tag => tag.type === 'jsig')
  .string
}
</pre></h3>

${doc.data.description.full}
`);
