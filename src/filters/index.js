import moment from 'moment';

export const CNDate = value => {
    if (!value) return ''
    value = value.toString()
    moment.locale("zh-cn")
    return moment(value).format('LL') 
}