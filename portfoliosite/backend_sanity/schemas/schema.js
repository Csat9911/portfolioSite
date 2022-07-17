import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

//sanity schemas to update/maintain information easily
import Testimonials from './testimonials'
import about from './about'
import brand from './brand'
import contact from './contact'
import expierences from './expierences'
import skills from './skills'
import workexpierence from './workexpierence'
import works from './works'

export default createSchema({
  //schema name
  name: 'default',

  types: schemaTypes.concat([
    Testimonials,
    about,
    contact,
    brand,
    expierences,
    skills,
    workexpierence,
    works

  ]),
})
