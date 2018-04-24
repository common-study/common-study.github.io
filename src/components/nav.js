import { h } from 'preact';
import { Checkbox } from './checkbox';
import { uniqueArray } from '../lib/utils';

export const Nav = ({ postData, tagData, categoryData, selectTag, deselectTag }) =>
    <nav class="w-third dib bg-white br relative">
        <div class="flex flex-wrap">
            { uniqueArray(postData.map(({date}) => new Date(date).getFullYear()))
                .map(date => <Checkbox value={date} selectTag={selectTag} deselectTag={deselectTag} />) }
        </div>
        <div class="js-categories-container flex flex-wrap">
            { categoryData.map(({name}) => <Checkbox value={name} selectTag={selectTag} deselectTag={deselectTag} />) }
        </div>
        <div class="js-tags-container flex flex-wrap">
            { tagData.map(({name}) => <Checkbox value={name} selectTag={selectTag} deselectTag={deselectTag} />) }
        </div>
    </nav>
