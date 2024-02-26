<script setup lang="ts">
import { defineProps } from "vue";
import { type GraphNode } from "@/models/data.dto";
import MoleculeTreeNode from "@/components/molecules/MoleculeTreeNode.vue";

const props = defineProps<GraphNode>();
</script>

<template>
    <div class="tree">
        <ul>
            <MoleculeTreeNode v-bind="props" />
        </ul>
    </div>
</template>

<style>
.tree ul {
    position: relative;
    padding: 1em 0; 
    white-space: nowrap;
    margin: 0 auto;
    text-align: center;

    &::after {
        content: '';
        display: table;
        clear: both;
    }
}

.tree li {
    display: inline-block;
    vertical-align: top;
    text-align: center;
	list-style-type: none;
	position: relative;
	padding: 1em .5em 0 .5em;

    &::before,
    &::after {
        content: '';
        position: absolute; 
        top: 0; 
        right: 50%;
        border-top: 1px solid #ccc;
        width: 50%; 
        height: 1em;
    }

    &::after {
        right: auto; 
        left: 50%;
        border-left: 1px solid #ccc;
    }

    &:only-child::after,
    &:only-child::before {
        display: none;
    }

    &:only-child {
        padding-top: 0;
    }
        
    &:first-child::before,
    &:last-child::after {
        border: 0 none;
    }

    &:last-child::before{
        border-right: 1px solid #ccc;
        border-radius: 0 5px 0 0;
    }

    &:first-child::after{
        border-radius: 5px 0 0 0;
    }
}

.tree ul ul::before{
    content: '';
    position: absolute; 
    top: 0; 
    left: 50%;
    border-left: 1px solid #ccc;
    width: 0; 
    height: 1em;
}

.tree li .btn:hover+ul li .btn {
    background: #e9453f;
    color: #fff;
    border: 1px solid #e9453f;
}

.tree li .btn:hover + ul li::after, 
.tree li .btn:hover + ul li::before, 
.tree li .btn:hover + ul::before, 
.tree li .btn:hover + ul ul::before{
	border-color:  #e9453f;
}
</style>