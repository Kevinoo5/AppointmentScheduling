<template>
    <div class="h-screen flex flex-col
                    items-center justify-center bg-slate-800 text-white">
      <div class="flex flex-col p-12 bg-slate-700 border-slate-900 border rounded-3xl items-center justify-center">
      <p class="text-white text-xl mb-3">
        Login To Your Account
      </p>

      <form>
        <label for="email"
               class="text-sm text-gray-200">
          Email
        </label>
        <input
               type="text" placeholder="Email"
               class="text-sm text-black w-full
                              mr-3 py-5 px-4 h-2 border bg-gray-100
                              border-gray-200 rounded-md mb-2" />

        <label for="password" class="text-sm text-gray-200">
          Password
        </label>
        <input
               type="password" placeholder="Password"
               class="text-sm text-black w-full mr-3 bg-gray-100
                              py-5 px-4 h-2 border border-gray-200
                              rounded-md mb-2" />

        <button type="submit"
                class="bg-green-300 text-black w-full rounded py-2 mt-4">
          Login
        </button>
      </form>
      </div>
    </div>
</template>