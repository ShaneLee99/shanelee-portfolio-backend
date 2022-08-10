import S from '@sanity/desk-tool/structure-builder'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

export default () =>
  S.list()
    .title('Content')
    .items([
        ...S.documentTypeListItems(),
        orderableDocumentListDeskItem({type: 'linkspage', title: "Links"})
    ])