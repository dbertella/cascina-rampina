import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import HomePagePreview from './preview-templates/HomePagePreview'

CMS.registerPreviewTemplate('chi-siamo', AboutPagePreview)
CMS.registerPreviewTemplate('cosa-facciamo', ProductPagePreview)
CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('news', BlogPostPreview)
