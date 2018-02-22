const fieldsgroups = `
  query fieldsgroups($contentType: String!) {
    fieldsgroups(contentType: $contentType) {
      _id
      name
      description
      order
      visible
      lastUpdatedBy {
        details {
          fullName
        }
      }
      getFields {
        _id
        contentType
        type
        text
        visible
        order
        options
        groupId
        description
        lastUpdatedBy {
          details {
            fullName
          }
        }
      }
    }
  }
`;

export default {
  fieldsgroups
};
