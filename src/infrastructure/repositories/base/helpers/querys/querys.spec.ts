import { buildSelect, buildInsert, buildUpdate } from '.'

describe('querys', () => {
  const table = 'test'

  it('build select', (done) => {
    buildSelect({ where: {}, attributes: ['test'] }, table)
    buildSelect({ where: { id: 1, name: 'test', age: null, range: [1, 5, 9] } }, table)
    done()
  })

  it('build insert', (done) => {
    const sqlText = buildInsert(
      {
        o: {
          id: 1
        },
        id: 1,
        name: 'test'
      },
      table
    )
    expect(sqlText).toMatch(/INSERT INTO test/i)
    done()
  })

  it('build update', (done) => {
    const sqlText = buildUpdate(
      {
        o: {
          test: {
            id: 1
          },
          name: 'test',
          age: 1
        },
        where: {
          id: 1,
          name: 'test',
          age: null
        }
      },
      table
    )
    expect(sqlText).toMatch(/UPDATE test/i)
    done()
  })
})
