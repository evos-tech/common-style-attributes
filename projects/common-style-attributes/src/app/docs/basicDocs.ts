export const basicDocs = {
  attributes: [
    {
      name: 'cover-image',
      description: '(deprecated)'
    },
    {
      name: 'debug',
      description: 'Create a visible border around element for visual debug purpose.'
    },
    {
      name: 'divider',
      description: 'Creates a divider.'
    },
    {
      name: 'hidden',
      description: 'Hidden element.'
    }
  ],
  demos: [
    {
      title: 'Basic Usage',
      code: `<div>
    <div>
        xxx
    </div>
    <div divider></div>
    <div>
        yyy
    </div>
    <div debug>
        zzz
        <div>zzz child 1</div>
        <div>zzz child 2</div>
    </div>
    <div hidden>you cannot see me</div>
</div>
`
    }
  ]
}
