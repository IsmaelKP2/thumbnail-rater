import { v } from "convex/values";
import {mutation, query} from "./_generated/server"
export const createThumbnail = mutation({
        args:{
            title: v.string(),
            aImage: v.string(),
            bImage: v.string(),
        },
        handler: async (ctx ,args) => {
            const user = await ctx.auth.getUserIdentity();

            if(!user)
            {
                throw new Error(" You must be signed in to create a Thumbnail")
            }
            await ctx.db.insert('thumbnails',{
                title: args.title,  
                userId: user.subject,
                aImage: args.aImage,
                bImage: args.bImage,
            })
        }
    });

export const getThumbnailsForUser = query({
        args:{},
        handler: async (ctx ,args) => {
            const user = await ctx.auth.getUserIdentity();

            if(!user)
            {
                return []
            }
            const thumbnails = await ctx.db
            .query('thumbnails')
            .filter((q)=> q.eq(q.field("userId"),user.subject))
            .collect();
            return thumbnails;
        }
});