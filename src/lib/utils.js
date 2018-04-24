export const uniqueArray = array => [...new Set(array)];

export const formattedTag = tag => String(tag).toLowerCase().replace(/ /g, '-');

export const fullYear = date => new Date(date).getFullYear();

export const tagNamesFromIds = (tags, data) => tags
    .map(tagId => data.find(tag => tag.id === tagId).name)
    .map(formattedTag);

export const formattedDate = date => new Date(date).toLocaleString('en-US', { month: 'long', year: 'numeric', day: 'numeric' });
